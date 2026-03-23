const express = require("express");
const app = express();

const PORT = 3000;

app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    message: "App is running"
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});