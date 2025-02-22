import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateContent(prompt) {
  try {
    console.log("Generating response for prompt:", prompt);
    const result = await model.generateContent(prompt);
    
    if (!result || !result.response) {
      throw new Error("Invalid AI response");
    }

    console.log("AI Response:", result.response.text());
    return result.response.text();
  } catch (error) {
    console.error("Error in AI service:", error);
    throw new Error("AI service failed: " + error.message);
  }
}

export default generateContent;
