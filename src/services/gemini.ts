import { GoogleGenAI, Type } from "@google/genai";
import { Itinerary } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateItinerary(destination: string, days: number): Promise<Itinerary> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Create a detailed, exciting ${days}-day travel itinerary for ${destination}. 
    Make it feel personalized and "WOW" with a mix of hidden gems and must-see spots.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          destination: { type: Type.STRING },
          duration: { type: Type.NUMBER },
          summary: { type: Type.STRING },
          days: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                day: { type: Type.NUMBER },
                theme: { type: Type.STRING },
                activities: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      time: { type: Type.STRING },
                      title: { type: Type.STRING },
                      description: { type: Type.STRING },
                      location: { type: Type.STRING },
                      cost: { type: Type.STRING },
                      type: { 
                        type: Type.STRING,
                        enum: ['sightseeing', 'food', 'transport', 'leisure']
                      }
                    },
                    required: ["time", "title", "description", "type"]
                  }
                }
              },
              required: ["day", "theme", "activities"]
            }
          }
        },
        required: ["destination", "duration", "summary", "days"]
      }
    }
  });

  if (!response.text) {
    throw new Error("Failed to generate itinerary");
  }

  return JSON.parse(response.text);
}
