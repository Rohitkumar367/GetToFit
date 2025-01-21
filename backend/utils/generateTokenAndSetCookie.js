
import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId, userName) => {

    const token = jwt.sign({userId, userName}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })

    //Token is stored in cookie
    res.cookie("token", token, {
        httpOnly: true, // so that cookie cannot be accessed by client side js
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7*24*60*60*1000
    })

    return token;
}

