const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios"); // Ensure axios is imported
const { startGeminiChat } = require("../gemini/chat.js");
const chatHistModel = require("../models/ChatHist.js");
const {
  analysisReportPrompt,
  analysisScorePrompt,
  analysisKeywordsPrompt,
} = require("../gemini/analysisPrompts.js");

const Report = require("../models/Report.js");
const User = require("../models/User.js");

const doAnalysis = async (req, res) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ Error: "UserId not found" });
    }

    const userId = req.userId;
    const analysis = await genAnalysis(userId);

    if (analysis?.info === "nodata") {
      return res.status(200).json({ msg: "nochatdata" });
    }

    // Save report to database
    const reportData = await Report.create({
      userId: userId,
      keywords: analysis.keywords,
      analysis: analysis.report,
      score: analysis.score,
    });

    try {
      // Fetch user email
      const user = await User.findOne({ userId: userId }); // ✅ Corrected field name
      if (!user) {
        console.warn(`⚠️ No user found with userId: ${userId}`);
      } else {
        // Send welcome email
        await axios.post("http://localhost:3000/welcomeEmail", {
          emailId: user.email,
          score: analysis.score,
          analysis: analysis.report,
          keywords: analysis.keywords,
        });

        console.log(`✅ Welcome email sent to ${user.email}`);
      }
    } catch (error) {
      console.error("❌ Error sending the welcome email:", error.message);
    }

    res.status(200).json({ data: reportData });
  } catch (error) {
    console.error("❌ Error in doAnalysis:", error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const genAnalysis = async (userId) => {
  try {
    if (!userId) {
      console.error("❌ Error: userId is undefined");
      return;
    }

    const foundHist = await chatHistModel.find({ userId }).sort({ timestamp: 1 });

    if (foundHist.length === 0) {
      return { info: "nodata" };
    }

    let foundHistForGemini = [];
    for (let conv of foundHist) {
      foundHistForGemini.push({
        role: "user",
        parts: [{ text: conv.prompt }],
      });
      foundHistForGemini.push({
        role: "model",
        parts: [{ text: conv.response }],
      });
    }

    // Generate report
    let chat = startGeminiChat(foundHistForGemini);
    let result = await chat.sendMessage(analysisReportPrompt);
    let response = await result.response;
    let report = response.text();

    // Generate score
    chat = startGeminiChat(foundHistForGemini);
    result = await chat.sendMessage(analysisScorePrompt);
    response = await result.response;
    const score = response.text();

    // Generate keywords
    chat = startGeminiChat(foundHistForGemini);
    result = await chat.sendMessage(analysisKeywordsPrompt);
    response = await result.response;
    const keywordsResp = response.text();
    const keywords = keywordsResp
      .replace(/[^a-zA-Z0-9 \n]/g, "")
      .trim()
      .split("\n")
      .map((kw) => kw.trim())
      .filter(
        (kw) =>
          kw.length !== 0 &&
          kw.toLowerCase() !== "keyword" &&
          kw.toLowerCase() !== "keywords"
      );

    return { report, score, keywords };
  } catch (error) {
    console.error("❌ Error in genAnalysis:", error.message);
  }
};

const getAnalysis = async (req, res) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ msg: "UserId not found" });
    }

    const userId = req.userId;
    const reports = await Report.find({ userId }).sort({ timestamp: -1 });

    res.status(200).json({ data: reports });
  } catch (error) {
    console.error("❌ Error in getAnalysis:", error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { genAnalysis, doAnalysis, getAnalysis };
