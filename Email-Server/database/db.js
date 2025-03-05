const { User, Report } = require("../Model/schema");

/**
 * Fetch users with their email and corresponding report.
 * Since `User` does not have `reportId`, we use `id` and match it with `Report.userId`.
 */
async function getUsersfromDB() {
    try {
        // Fetch users with a valid `id`
        const users = await User.find({}, "email id");

        if (!users.length) {
            console.warn("⚠️ No users found in the database.");
            return [];
        }

        // Fetch reports for each user based on `userId`
        const userReports = await Promise.all(users.map(async (user) => {
            const report = await Report.findOne({ userId: user.id });

            return {
                email: user.email,
                userId: user.id,
                report: report || null, // Attach the report if found
            };
        }));

        return userReports;
    } catch (error) {
        console.error("❌ Error fetching users from DB:", error.message);
        return [];
    }
}

/**
 * Fetch a report from DB using userId (not reportId).
 */
async function getReportfromDB(userId) {
    try {
        if (!userId) {
            console.warn("⚠️ No userId provided for fetching report.");
            return null;
        }

        // Fetch the report using `userId`
        const report = await Report.findOne({ userId });

        if (!report) {
            console.warn(`⚠️ No report found for userId: ${userId}`);
            return null;
        }

        return report;
    } catch (error) {
        console.error("❌ Error fetching report from DB:", error.message);
        return null;
    }
}

module.exports = { getUsersfromDB, getReportfromDB };
