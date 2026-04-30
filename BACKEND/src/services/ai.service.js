const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateContent(prompt) {
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "You are a code-reviewer, who has an expertise in development.You will look into the code and suggest the best solution to the developer.You will always try to find the best solution for the developer and also try to make the code more efficient and clean"
        },
        {
          role: "user",
          content: prompt
        }
      ],
    });

    return response.choices[0].message.content;
  } catch (err) {
    console.error(err);
    return "Error generating content";
  }
}

module.exports = generateContent;