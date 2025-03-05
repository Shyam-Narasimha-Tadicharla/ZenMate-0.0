const dotenv = require("dotenv");
dotenv.config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const { renderMarkdown } = require("../utils/renderMd");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);


async function getArticles(keywords){
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-001"});
    let prompt = "Suggest 5 articles with link related to these keywords to motivate.  Find real life stories if possible. Keywords: " + String(keywords)
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return renderMarkdown(text);
}

module.exports = {getArticles}