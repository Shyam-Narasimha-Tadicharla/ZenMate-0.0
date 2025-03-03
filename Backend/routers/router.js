const { Router } = require("express");
const { connectWithChatBot } = require("../controllers/chat.js");
const { doAnalysis, getAnalysis } = require("../controllers/analysis.js");
const { userMiddleware } = require("../middlewares/genUserId.js");
const { signup, login, isUser, logout, signinwithGoogle } = require("../controllers/user.js");

const router = Router();
router.route("/cron").get((req, res) => {
  res.status(200).json({ message: "hello" });
});
router.route("/chat").get(userMiddleware, connectWithChatBot);
router.route("/analysis").get(userMiddleware, doAnalysis);
router.route("/fetchanalysis").get(userMiddleware, getAnalysis);
router.route("/signup").post(signup);
router.route("/signupWithGoogle").post(signinwithGoogle)
router.route("/login").post(login);
router.route("/isUser").get(isUser);
router.route("/logout").get(logout);


router.route("/api/home/postQuery").post((req, res) => {
  console.log("POST request received at /api/home/postQuery");
  // The data storing of all details must be here

  const { name, email, subject, phone, message } = req.body;
  console.log(name, email, subject, phone, message);
  // Respond with status 200
  res.status(200).json({ message: "Query successful!" });

  // Log the response status to verify it's 200
  console.log("Response sent with status: 200");
});



module.exports = router;
