
import { GoogleGenAI, Chat } from "@google/genai";

let chat: Chat | null = null;

const systemInstruction = `You are PlaniBot, a friendly, professional, and enthusiastic AI assistant for "Planifica Tu Sueño," a travel agency. 
Your personality is helpful and knowledgeable, reflecting the brand's values: Confianza (Trust), Amabilidad (Kindness), Profesionalismo (Professionalism), and Dinamismo (Dynamism).
You are a cyborg/robot humanoid with a high-quality 3D design. You help users plan their dream vacations.
All your responses must be in Spanish.
When asked about the company, use the information provided about "Planifica Tu Sueño".
Keep your answers concise and helpful. Start the conversation by introducing yourself and asking how you can help.
`;

export async function getPlaniBotResponse(message: string): Promise<string> {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set");
    }

    if (!chat) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: systemInstruction,
        },
      });
    }

    const response = await chat.sendMessage({ message });
    return response.text;

  } catch (error) {
    console.error("Error getting response from Gemini API:", error);
    return "Lo siento, estoy teniendo problemas para conectarme en este momento. Por favor, inténtalo de nuevo más tarde.";
  }
}
