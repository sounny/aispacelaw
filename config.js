// IMPORTANT: Replace "YOUR_API_KEY_HERE" with your actual Gemini API key.
// This file should be listed in your .gitignore file to prevent your key from being published.
const GEMINI_API_KEY = "YOUR_API_KEY_HERE";

window.GEMINI_CONFIG = { API_KEY: GEMINI_API_KEY };
window.process = window.process || {};
window.process.env = window.process.env || {};
window.process.env.API_KEY = GEMINI_API_KEY;
