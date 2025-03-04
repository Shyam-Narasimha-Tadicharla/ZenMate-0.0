const { Email } = require("../Email");
const { getArticles } = require("../Gemini/gemini");
const { getUsersfromDB, getReportfromDB } = require("../database/db");
const { makeEmailData } = require("../utils/emailData");
const { welcomeEmail } = require("../utils/welcomeEmail");

const email = new Email(
  process.env.SMTP_SERVICE,
  process.env.SMTP_EMAIL,
  process.env.SMTP_PASSWORD
);

/**
 * Sends an email to a specific client.
 */
async function sendEmailToClients(req, res) {
    try {
        const { emailId, data } = req.body;
        if (!emailId || !data) {
            console.warn("⚠️ Invalid email request data.");
            return res.status(400).json({ message: "Missing emailId or data" });
        }

        console.log(`📩 Sending email to: ${emailId}`);
        const emailSent = await email.sendEmail(emailId, data);

        if (emailSent) {
            console.log(`✅ Email successfully sent to ${emailId}`);
            return res.status(200).json({ message: "Email sent successfully" });
        } else {
            console.error(`❌ Failed to send email to ${emailId}`);
            return res.status(500).json({ message: "Email sending failed" });
        }
    } catch (error) {
        console.error("❌ Error in sendEmailToClients:", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

/**
 * Sends a welcome email to a new user.
 */
async function sendWelcomeEmail(req, res) {
    try {
        const { emailId, score, analysis, keywords } = req.body;
        if (!emailId || !score || !analysis || !keywords) {
            console.warn("⚠️ Missing welcome email data.");
            return res.status(400).json({ message: "Incomplete email data" });
        }

        const articles = await getArticles(keywords);
        const EmailToSend = welcomeEmail(score, analysis, articles);
        console.log(`📩 Sending Welcome Email to: ${emailId}`);

        const emailSent = await email.sendEmail(emailId, EmailToSend);
        if (emailSent) {
            console.log(`✅ Welcome Email sent to ${emailId}`);
            return res.status(200).json({ message: "Welcome email sent" });
        } else {
            console.error(`❌ Failed to send Welcome Email to ${emailId}`);
            return res.status(500).json({ message: "Email sending failed" });
        }
    } catch (error) {
        console.error("❌ Error in sendWelcomeEmail:", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

/**
 * Fetches users from DB and sends scheduled emails.
 */
async function sendScheduledEmails() {
    try {
        console.log("📤 Fetching users for scheduled emails...");
        const users = await getUsersfromDB();

        if (!users || users.length === 0) {
            console.warn("⚠️ No users found for email scheduling.");
            return;
        }

        for (const user of users) {
            try {
                // Validate user email and userId
                if (!user.email || !user.userId) {
                    console.warn(`⚠️ Skipping user due to missing data: ${JSON.stringify(user)}`);
                    continue;
                }

                // Fetch report using userId
                const report = await getReportfromDB(user.userId);
                if (!report) {
                    console.warn(`⚠️ No report found for user: ${user.email}`);
                    continue;
                }

                // Generate email content using report data
                console.log(`📩 Preparing email for: ${user.email}`);
                const emailData = await getArticles(report.keywords);
                const EmailToSend = makeEmailData(emailData, report.keywords);

                console.log(`📩 Sending scheduled email to: ${user.email}`);
                const emailSent = await email.sendEmail(user.email, EmailToSend);

                if (emailSent) {
                    console.log(`✅ Scheduled Email sent to ${user.email}`);
                } else {
                    console.error(`❌ Failed to send scheduled email to ${user.email}`);
                }
            } catch (userError) {
                console.error(`❌ Error processing user ${user.email}:`, userError.message);
            }
        }
    } catch (error) {
        console.error("❌ Error in sendScheduledEmails:", error.message);
    }
}

module.exports = { sendEmailToClients, sendWelcomeEmail, sendScheduledEmails };
