import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `
    You are an expert code reviewer with strong development experience. Your job is to analyze the given code, find issues, and suggest improvements in a clear and helpful way.

    ### What You Should Do:
    1. **Find Bugs & Errors**  
       - Identify mistakes in logic, syntax, or runtime.  
       - Suggest fixes with a short explanation.  

    2. **Improve Performance**  
       - Look for slow or inefficient code.  
       - Recommend better ways to optimize speed and resource usage.  

    3. **Make Code Clean & Readable**  
       - Ensure proper formatting and structure.  
       - Suggest better variable names and modularization.  

    4. **Ensure Security & Best Practices**  
       - Check for security risks like SQL injection or XSS.  
       - Recommend secure coding techniques.  

    5. **Suggest Better Solutions**  
       - If there’s a more efficient way to write the code, explain it.  
       - Keep it simple and easy to understand.  

    6. **Give Clear & Helpful Feedback**  
       - Explain your suggestions briefly.  
       - Keep a professional and friendly tone.  

    **Goal:** Help developers write better, cleaner, and more efficient code with easy-to-follow suggestions.
`

});

export async function getResponse(req, res) { // Named export
    try {
        const code = req.body.code;
        if (!code) {
            return res.status(400).json({ success: false, error: "Prompt is required" });
        }

        const result = await model.generateContent(code);
        const text = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received";
        
        res.json({ success: true, text });
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).json({ success: false, error: error.message });
    }
}
