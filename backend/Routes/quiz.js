import express from "express";
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { topic } = req.body;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: `
Generate exactly 5 multiple-choice questions on "${topic}".

Return ONLY valid JSON.

Example format:

[
  {
    "question": "What is Ohm's Law?",
    "options": [
      "Voltage equals Current × Resistance",
      "Power equals Voltage × Current",
      "Resistance equals Voltage × Power",
      "Current equals Power ÷ Voltage"
    ],
    "answer": "Voltage equals Current × Resistance"
  }
]

Rules:
- Generate exactly 5 questions.
- Each question must have exactly 4 options.
- The "answer" must exactly match one of the options.
- Do NOT return markdown.
- Do NOT use \`\`\`json.
- Return ONLY the JSON array.
          `,
        },
      ],
    });

    let text = completion.choices[0].message.content.trim();

    // Remove markdown if AI accidentally returns it
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    const quiz = JSON.parse(text);

    res.json({ quiz });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to generate quiz",
    });
  }
});

export default router;