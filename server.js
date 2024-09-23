// const express = require("express");
// const path = require("path");
// const app = express();

// // Serve the TikTok verification file
// app.get(
//   "/tiktok-developers-site-verification=w7WLLN8pB1vpyt8JsSlgOtEVo0qDfLPj",
//   (req, res) => {
//     res.sendFile(
//       path.join(
//         __dirname,
//         "tiktok-developers-site-verification=w7WLLN8pB1vpyt8JsSlgOtEVo0qDfLPj.txt"
//       )
//     );
//   }
// );

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require("express");
// const path = require("path");
// const app = express();

// // Serve the TikTok verification file
// app.get(
//   "/tiktok-developers-site-verification=w7WLLN8pB1vpyt8JsSlgOtEVo0qDfLPj",
//   (req, res) => {
//     res.sendFile(
//       path.resolve(
//         __dirname,
//         "./tiktok-developers-site-verification=w7WLLN8pB1vpyt8JsSlgOtEVo0qDfLPj.txt"
//       )
//     );
//   }
// );

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "public" directory (optional, if you place the file in a 'public' folder)
app.use(express.static("public"));

// Serve TikTok verification file
app.get(
  "/tiktok-developers-site-verification=w7WLLN8pB1vpyt8JsSlgOtEVo0qDfLPj",
  (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname,
        "tiktok-developers-site-verification=w7WLLN8pB1vpyt8JsSlgOtEVo0qDfLPj.txt"
      )
    );
  }
);

// Serve the Privacy Policy HTML file
app.get("/privacy-policy", (req, res) => {
  res.sendFile(path.resolve(__dirname, "privacy-policy.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
