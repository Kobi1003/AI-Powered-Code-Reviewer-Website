require('dotenv').config(); // Load variables from .env
const app = require('./src/app'); // Import the app logic

// Use the PORT Render provides automatically, or 3000 for local testing
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});