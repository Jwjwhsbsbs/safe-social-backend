const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 Safe Social Backend is running!");
});

// Example API Route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Safe Social API 👋" });
});

// Start Server
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
