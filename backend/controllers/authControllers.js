

import UserModel from "../models/userModel.js";
import WishlistModel from "../models/userWishlist.js";
import bcryptjs from 'bcryptjs'
import crypto from 'crypto'
import dotenv from 'dotenv'
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendPasswordResetEmail, sendResetSuccessEmail, sendVerificationEmail, sendWelcomeEmail } from "../nodemailer/emails.js";
dotenv.config();

export const signup = async (req, res) => {

    const {email, password, name} = req.body;

    try {
        if(!email || !password || !name){
            throw new Error("All fields are required");
        }
           
        const userAlreadyExists = await UserModel.findOne({email});

        if(userAlreadyExists){
            return res.status(400).json({success: false, message: "User already exists"})
        }

        // password encoding
        const hashedPassword = await bcryptjs.hash(password, 12);

        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new UserModel({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationExpiresAt: Date.now()+24*60*60*1000 //-> +24 hours
        })

        await user.save();

        // jwt creation
        generateTokenAndSetCookie(res, user._id, user.name);
        
        // mail verification code sending
        await sendVerificationEmail(user.email, verificationToken);

        // send data to the client
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: {
                ...user._doc, // to avoid additional mongoose data
                password: undefined
            }
        })

    } catch (error) {
        console.log("error during singup", error);
        res.status(400).json({success: false, message: error.message});
    }
}


export const verifyEmail = async (req, res) => {

    const {code} = req.body;

    try {
        const user = await UserModel.findOne({
            verificationToken: code,
            verificationExpiresAt: {$gt: Date.now()} //-> fetch that user whose verificationExpiresAt value is greater than current date and time
        })

        if(!user){
            return res.status(400).json({success: false, message: "Invalid or expired verification code"})
        }

        // if user found
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationExpiresAt = undefined;

        await user.save();

        // after code verification sending a welcome email to the user
        await sendWelcomeEmail(user.email, user.name);

        // send data to client
        res.status(200).json({
            success: true,
            message: "Email verified successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        })

    } catch (error) {
        console.log("error in verifyEmail", error);
        res.status(500).json({success: false, message: error.message});   
    }
}


export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await UserModel.findOne({email})

        if(!user){
            return res.status(400).json({success: false, message: "Invalid credentials"})
        }
        
        // decoding the password
        const isPassswordValid = await bcryptjs.compare(password, user.password);
        
        if(!isPassswordValid){
            return res.status(400).json({success: false, message: "Invalid credentials"})
        }
 
        // jwt creation
        generateTokenAndSetCookie(res, user._id, user.name);

        // update the login date
        user.lastLogin = new Date();

        await user.save();

        // send data to client
        res.status(200).json({
            success: true,
            message: "Loggen in successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        })        
    } catch (error) {
        console.log("error in login", error);
        res.status(400).json({success: false, message: error.message});  
    }
}


export const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({success: true, message: "Logged out successfully"})
}


export const forgotPassword = async (req, res) => {
    const {email} = req.body;

    try {
        const user = await UserModel.findOne({email});

        if(!user){
            return res.status(400).json({success: false, message: "User doesn't exist on this email"})
        }

        // generate reset token
        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt = Date.now() + 1*60*60*1000; // +1 hour

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpiresAt = resetTokenExpiresAt

        await user.save();

        // send email
        await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);

        res.status(200).json({success: true, message: "password reset link sent to your email"})

    } catch (error) {
        console.log("error in forgotPassword", error);
        res.status(400).json({success: false, message: error.message});   
    }
}


export const resetPassword = async (req, res) => {
    try {
        const {token} = req.params;
        const {password} = req.body;

        const user = await UserModel.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: {$gt: Date.now()}
        })

        if(!user){
            return res.status(400).json({success: false, message: "Invalid or expired reset token"})
        }

        // update password
        const hashedPassword = await bcryptjs.hash(password, 10);

        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;

        await user.save();

        await sendResetSuccessEmail(user.email);

        res.status(200).json({success: true, message: "password reset successfully"})

    } catch (error) {
        console.log("error in password reset", error);
        res.status(400).json({success: false, message: error.message});
    }
}


export const checkAuth = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId).select("-password");

        if(!user){
            return res.status(400).json({success: false, message: "User not found"});
        }

        res.status(200).json({
            success: true, 
            user
        })

    } catch (error) {
        console.log("Error in checkAuth", error);
        res.status(400).json({success: false, message: error.message});
    }
}


export const addToWishlist = async(req, res)=>{
    try {
        const {userId, route, exerciseName} = req.body;

        let wishlist = await WishlistModel.findOne({userId})

        if(!wishlist){
            wishlist = new WishlistModel({
                userId, 
                routes: [{route, exerciseName}]
            });
        }
        else{
            const isRouteExists = wishlist.routes.some((r)=>r.route===route);

            if (isRouteExists) {
                return res.status(400).json({
                    success: false,
                    message: "This exercise is already in your wishlist."
                });
            }

            wishlist.routes.push({ route, exerciseName });
        }
        
        await wishlist.save();
        
        res.status(200).json({
            success: true,
            message: "Wishlist save successful",
            wishlist: {
                ...wishlist._doc,
            }
        })

    } catch (error) {
        console.log("error in saving wishlist", error);
        res.status(400).json({success: false, message: error.message});   
    }
}

export const getToWishlist = async(req, res)=>{
    try {
        const {userId} = req.params;

        const wishlist = await WishlistModel.findOne({userId})

        if(!wishlist){
            return res.status(400).json({success: false, message: "Invalid or No data"})
        }

        res.status(200).json({
            success: true,
            message: "Wishlist fetch successful",
            wishlist: {
                ...wishlist._doc,
            }
        })

    } catch (error) {
        console.log("error in fetching wishlist", error);
        res.status(400).json({success: false, message: error.message});   
    }
}

export const deleteWishlist = async(req, res)=>{
    try {
        const {userId, route} = req.body;

        const wishlist = await WishlistModel.findOne({userId})

        if(wishlist){
            wishlist.routes = wishlist.routes.filter((r)=> r.route!==route);
            await wishlist.save();
        }

        res.status(200).json({
            success: true,
            message: "Wishlist delete successful",
            wishlist: {
                ...wishlist._doc,
            }
        })

    } catch (error) {
        console.log("error in deleting wishlist", error);
        res.status(400).json({success: false, message: error.message});   
    }
}

