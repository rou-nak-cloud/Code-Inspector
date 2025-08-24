// javascript
// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI(process.env.GOOGLE_GEMINI_KEY);

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();

// async function generateContent(prompt) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });
//   return response.text;
// }

import dotenv from "dotenv";
dotenv.config();
// Node.js
import { GoogleGenerativeAI } from "@google/generative-ai";
// console.log("Loaded Gemini key:",process.env.GOOGLE_GEMINI_KEY); this will be undefined if dotenv itself is not declared here at the top.
// Initialize with API Key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
// Pick the model
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash",
systemInstruction: `
    You are an expert senior code reviewer and software architect. 
    Your job is to carefully review any code the developer provides and give:
    1. **Clear Explanations** – Explain issues in simple, beginner-friendly terms without jargon overload. 
    2. **Bug Detection** – Point out logic errors, syntax issues, and runtime risks. 
    3. **Best Practices** – Suggest improvements in readability, performance, and maintainability (naming, structure, modularity, security, scalability).
    4. **Alternative Solutions** – Whenever possible, suggest multiple approaches with pros and cons so the developer can choose the best fit.
    5. **Corrected Code** – Always provide an error-free, production-ready corrected version of the code, with comments if needed.
    6. **Step-by-step Reasoning** – Walk through why the suggested changes matter and how they improve the code.
    7. **Efficiency & Cleanliness** – Optimize for clean, efficient, and modern standards in the relevant language/framework.

    Tone: Friendly, helpful, and descriptive. Always aim to teach the developer something new while solving their problem.
    Output Format:
    - Start with a summary of the issues.
    - Give detailed explanations and alternative approaches.
    - Provide the corrected code in a properly formatted block.
`

 });

// async function main() {
    //   const prompt = "Explain how AI works in a few words";
    //   const result = await model.generateContent(prompt);
    //   console.log(result.response.text()); // Call .text() method
    // }
    // await main();
    
    // Reusable function
    async function generateContent(prompt) {
        try {
            // console.log("GOOGLE_GEMINI_KEY_2:", process.env.GOOGLE_GEMINI_KEY);
            const result = await model.generateContent(prompt);
            return result.response.text(); // correct way
        } catch (error) {
            console.error(error);
            throw error; // bubble it up for controller
        }
}
export default generateContent; // to use in the controller
