const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes'); 

const app = express();

// Allow ONLY your frontend port to talk to this backend
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
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