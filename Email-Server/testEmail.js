const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmail() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: 'nmeghana1408@gmail.com',  // Replace with your test email
        subject: 'SMTP Test Email',
        text: 'This is a test email to check if SMTP is working properly.'
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Test email sent successfully:", info.response);
    } catch (error) {
        console.error("Error sending test email:", error.message);
    }
}

testEmail();
