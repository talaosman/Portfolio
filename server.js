// server.js (CommonJS version)
const path = require("path");
const axios = require("axios");
const cors = require("cors");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// __dirname works in CommonJS automatically
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;
  console.log("Received prompt:", prompt);

  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  try {
    console.log("Generating image with Pollinations.ai...");

    const encodedPrompt = encodeURIComponent(prompt);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true`;

    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      timeout: 30000
    });

    const base64 = Buffer.from(response.data, "binary").toString("base64");

    console.log("Image generated successfully!");
    res.json({ image: `data:image/jpeg;base64,${base64}` });
  } catch (error) {
    console.error("Error generating image:", error.message);
    res.status(500).json({ 
      error: "Failed to generate image",
      details: error.message 
    });
  }
});

// Serve React frontend
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
