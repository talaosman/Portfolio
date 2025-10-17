import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "build")));

// ✅ FIX: Use regex for "match all" route
// ✅ Use regex to catch all routes
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
