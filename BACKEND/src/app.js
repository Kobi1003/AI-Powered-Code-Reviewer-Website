const express = require('express');
const aiRoutes = require('./routes/ai.routes'); 

const app = express();

// Allow ONLY your frontend port to talk to this backend
// Replace this with your actual deployed frontend URL (e.g., https://my-app.onrender.com)
const cors = require("cors");

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173"
].filter(Boolean);

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true
}));
app.use(express.json());

// 3. Routes
// Test route to make sure backend is alive
app.get("/", (req, res) => {
    res.send("Code Reviewer API is online.");
});

app.use('/ai', aiRoutes);

// 4. Export the app instance
module.exports = app;