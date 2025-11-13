import { GoogleGenAI, Type } from "@google/genai";
import { PosterContent } from "../types";

export const fallbackContent: PosterContent = {
    gapTopics: [
      { title: 'Outer Space Treaty (1967)', details: 'The Outer Space Treaty is the foundation of space law, but it was written long before AI. It doesn\'t address autonomous decision-making, leaving a gap in accountability when an AI causes an incident.', imagePrompt: 'An old, yellowed scroll representing the treaty, with a glowing, digital neural network pattern spreading across it, causing cracks.' },
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
  
export async function generatePosterContent(): Promise<PosterContent> {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
    const fetchedContentSchema = {
      type: Type.OBJECT,
      properties: {
        gapTopics: {
          type: Type.ARRAY,
          description: "A list of exactly 3 topics about AI governance black holes in space law. The topics must be: 'Outer Space Treaty (1967)', 'Current Laws/Guidelines', and 'Current uses of AI'.",
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "The title of the topic." },
              details: { type: Type.STRING, description: "A detailed paragraph explaining the topic." },
              imagePrompt: { type: Type.STRING, description: "A short, descriptive prompt for a conceptual image." }
            },
            required: ["title", "details", "imagePrompt"]
          }
        },
        solutions: {
          type: Type.ARRAY,
          description: "A list of 4 solutions corresponding to 'Liability', 'Surveillance', 'Bias', and 'Unpredictable Autonomy'.",
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "A short title for the solution." },
              description: { type: Type.STRING, description: "A detailed paragraph explaining the solution." }
            },
            required: ["title", "description"]
          }
        }
      },
      required: ["gapTopics", "solutions"]
    };
    
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const maxRetries = 3;
    let attempt = 0;
    let delay = 1000;
  
    while (attempt < maxRetries) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: "Generate content for a poster on 'AI, Policy, Ethics & Space Law'. For 'gapTopics', provide exactly 3 entries for 'Outer Space Treaty (1967)', 'Current Laws/Guidelines', and 'Current uses of AI', including details and an image prompt. For 'solutions', provide exactly 4 solutions for 'Liability', 'Surveillance', 'Bias', and 'Unpredictable Autonomy'. Follow the schema precisely.",
          config: {
            responseMimeType: "application/json",
            responseSchema: fetchedContentSchema,
          },
        });
        const data = JSON.parse(response.text.trim());
        if (!data.gapTopics || data.gapTopics.length < 3) throw new Error("API did not return 3 gap topics.");
        if (!data.solutions || data.solutions.length < 4) throw new Error("API did not return 4 solutions.");
        return data as PosterContent;
      } catch (error) {
        attempt++;
        console.error(`Error generating content (Attempt ${attempt}):`, error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        if (errorMessage.includes("429") || errorMessage.includes("RESOURCE_EXHAUSTED")) {
          if (attempt >= maxRetries) {
            throw new Error("API quota exceeded. Please check your plan or try again later.");
          }
          await sleep(delay);
          delay *= 2;
        } else {
          throw new Error("Failed to fetch or parse poster content from Gemini API.");
        }
      }
    }
    throw new Error("Failed to fetch poster content after multiple retries.");
}
