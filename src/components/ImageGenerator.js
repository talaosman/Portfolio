import React, { useState } from "react";
import axios from "axios";
// AI feature
function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0); // Track how many times Generate is clicked

  const generateImage = async () => {
    if (clickCount >= 5) {
      alert("Limit reached! You can only generate 5 images per session.");
      return;
    }

    if (!prompt) {
      alert("Please enter a prompt first!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/generate", { prompt });
      setImageUrl(response.data.image);

      // Increment click count after successful generation
      setClickCount(prev => prev + 1);
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate image. Try again!");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", margin: "50px 0" }}>
      <h2>AI Image Generator</h2>
      <input
        type="text"
        placeholder="Enter image prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "60%", padding: "10px", borderRadius: "5px" }}
      />
      <button
        onClick={generateImage}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
          borderRadius: "5px",
          background: "#00bfff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {imageUrl && (
        <div style={{ marginTop: "30px" }}>
          <img
            src={imageUrl}
            alt="AI Generated"
            style={{ maxWidth: "80%", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageGenerator;
