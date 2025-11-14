const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
const PROMPT = "Generate content for a poster on 'AI, Policy, Ethics & Space Law'. For 'gapTopics', provide exactly 3 entries for 'Outer Space Treaty (1967)', 'Current Laws/Guidelines', and 'Current uses of AI', including details and an image prompt. For 'solutions', provide exactly 4 solutions for 'Liability', 'Surveillance', 'Bias', and 'Unpredictable Autonomy'. Return valid JSON that matches the fallbackContent structure.";

export const fallbackContent = {
    gapTopics: [
      { title: 'Outer Space Treaty (1967)', details: "The Outer Space Treaty is the foundation of space law, but it was written long before AI. It doesn't address autonomous decision-making, leaving a gap in accountability when an AI causes an incident.", imagePrompt: 'An old, yellowed scroll representing the treaty, with a glowing, digital neural network pattern spreading across it, causing cracks.' },
      { title: 'Current Laws/Guidelines', details: 'Current regulations are a mix of national laws and non-binding international "soft laws." This patchwork approach creates inconsistencies and loopholes, failing to provide a clear, unified framework for AI governance in space.', imagePrompt: 'A tangled knot of different colored ropes and wires, with some frayed and broken ends, failing to contain a central, glowing AI core.' },
      { title: 'Current uses of AI', details: 'AI is already essential for satellite navigation, earth observation data analysis, and rover autonomy. The rapid pace of this technological integration is far outstripping the slow development of international law and policy.', imagePrompt: 'A sleek, futuristic satellite orbiting Earth, with visible data streams connecting it to a complex, glowing AI brain graphic.' }
    ],
    solutions: [
      { title: 'Adaptive Governance Framework', description: '' },
      { title: 'Tech Diplomacy & Standards', description: '' },
      { title: 'Meaningful Human Control', description: '' },
      { title: 'Binding Legal Frameworks', description: '' }
    ]
};

function getApiKey() {
    const fromConfig = (window.GEMINI_CONFIG && window.GEMINI_CONFIG.API_KEY) || (window.process && window.process.env && window.process.env.API_KEY);
    if (!fromConfig || fromConfig === 'YOUR_API_KEY_HERE') {
        throw new Error('API_KEY environment variable not set. Update config.js with a valid Gemini API key.');
    }
    return fromConfig;
}

function validateContent(data) {
    if (!data || !Array.isArray(data.gapTopics) || data.gapTopics.length < 3) {
        throw new Error('API did not return 3 gap topics.');
    }
    if (!Array.isArray(data.solutions) || data.solutions.length < 4) {
        throw new Error('API did not return 4 solutions.');
    }
    return data;
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function generatePosterContent() {
    const apiKey = getApiKey();
    const maxRetries = 3;
    let attempt = 0;
    let delay = 1000;

    while (attempt < maxRetries) {
        try {
            const response = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{ role: 'user', parts: [{ text: PROMPT }] }],
                    generationConfig: {
                        responseMimeType: 'application/json'
                    }
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Gemini API error: ${response.status} ${errorText}`);
            }

            const payload = await response.json();
            const textParts = payload?.candidates?.[0]?.content?.parts || [];
            const contentText = textParts.map(part => part.text || '').join('').trim();
            if (!contentText) {
                throw new Error('Gemini API returned an empty response.');
            }

            const parsed = JSON.parse(contentText);
            return validateContent(parsed);
        } catch (error) {
            attempt++;
            console.error(`Error generating content (Attempt ${attempt}):`, error);
            const message = error instanceof Error ? error.message : String(error);
            if (message.includes('429') || message.includes('RESOURCE_EXHAUSTED')) {
                if (attempt >= maxRetries) {
                    throw new Error('API quota exceeded. Please check your plan or try again later.');
                }
                await sleep(delay);
                delay *= 2;
            } else if (attempt >= maxRetries) {
                throw new Error('Failed to fetch or parse poster content from Gemini API.');
            }
        }
    }

    throw new Error('Failed to fetch poster content after multiple retries.');
}
