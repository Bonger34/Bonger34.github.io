import {GoogleGenerativeAI} from "@google/generative-ai";
import {marked} from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const API_KEY = "AIzaSyAYFmsGxIgBSF_LH30dfSa8Cdn7T0oszNs";

const genAI = new GoogleGenerativeAI(API_KEY);

async function generate() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({model: "gemini-pro"});
    const prompt = document.getElementById("input").value;
    const result = await model.generateContentStream(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    document.getElementById("output").innerHTML = marked(text);
}

window.generate = generate;