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

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: `Explain "${topic}" in simple language for an engineering student.

Include:
1. Introduction
2. Key Concepts
3. Real-life Example`,
        },
      ],
    });

    res.json({
      lesson: chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      lesson: "Error generating lesson",
    });
  }
});

export default router;