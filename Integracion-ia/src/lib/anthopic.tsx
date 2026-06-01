import { Anthropic } from "@anthropic-ai/sdk"; 

const apiKey = import.meta.env.VITE_ANTHROPIC_KEY;

export const apiClaude = new Anthropic({ apiKey })

