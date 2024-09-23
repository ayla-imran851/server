const express = require("express");
const path = require("path");
const app = express();

// Serve the TikTok verification file
app.get(
  "/tiktok-developers-site-verification=w7WLLN8pB1vpyt8JsSlgOtEVo0qDfLPj",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "tiktok-developers-site-verification=w7WLLN8pB1vpyt8JsSlgOtEVo0qDfLPj.txt"
      )
    );
  }
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
