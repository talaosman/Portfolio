const axios = require("axios");

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Get the prompt from request body
  const { prompt } = JSON.parse(event.body);

  if (!prompt) {
    return { statusCode: 400, body: JSON.stringify({ error: "Prompt is required" }) };
  }

  try {
    const encodedPrompt = encodeURIComponent(prompt);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true`;

    // Fetch the image from Pollinations.ai
    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      timeout: 30000
    });

    // Convert binary data to base64
    const base64 = Buffer.from(response.data, "binary").toString("base64");

    return {
      statusCode: 200,
      body: JSON.stringify({ image: `data:image/jpeg;base64,${base64}` }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to generate image", details: err.message }),
    };
  }
};
