const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes'); 

const app = express();

// 1. Configure CORS
// This allows your frontend to talk to your backend
const frontendURL = process.env.FRONTEND_URL || "http://localhost:5173"; 

app.use(cors({
    origin: frontendURL,
    methods: ["GET", "POST"],
    credentials: true
}));

// 2. Middleware
app.use(express.json());

// 3. Routes
// Test route to make sure backend is alive
app.get("/", (req, res) => {
    res.send("Code Reviewer API is online.");
});

app.use('/ai', aiRoutes);

// 4. Export the app instance
module.exports = app;