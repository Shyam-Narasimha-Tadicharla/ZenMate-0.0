const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cron = require('node-cron');
const cors = require('cors');
const { sendWelcomeEmail, sendScheduledEmails } = require('./Controller/email.controller');
const connectDB = require('./database/ConnectDb');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello" });
});

// Route for sending welcome email
app.post('/welcomeEmail', sendWelcomeEmail);

// 🔹 Send Emails Immediately When Server Starts
(async () => {
    try {
        console.log("🚀 Sending emails immediately on server start...");
        await sendScheduledEmails();
        console.log("✅ Immediate email dispatch complete!");
    } catch (error) {
        console.error("❌ Error sending immediate emails:", error.message);
    }
})();

// 🔹 Schedule Cron Job to Send Emails at 12:01 PM IST Daily
cron.schedule('01 12 * * *', async () => {
    console.log("⏳ Scheduled Email Task Started...");
    try {
        await sendScheduledEmails();
        console.log("✅ All Scheduled Emails Sent Successfully!");
    } catch (error) {
        console.error("❌ Error in Scheduled Email Task:", error.message);
    }
}, {
    timezone: 'Asia/Kolkata'
});

// Start Server
const PORT = process.env.PORT || 8888;
const server = app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
});

// Graceful Shutdown (Handle SIGINT & SIGTERM)
process.on('SIGINT', () => {
    console.log("🔴 Shutting down server...");
    server.close(() => {
        console.log("✅ Server closed. Exiting process.");
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log("🔴 Process terminated.");
    server.close(() => process.exit(0));
});
