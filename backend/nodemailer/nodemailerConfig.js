
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config();

async function createTransporter() {

    const config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }

    const transporter = nodemailer.createTransport(config);

    return transporter;
}

export default createTransporter;
