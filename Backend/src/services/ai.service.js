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
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

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
