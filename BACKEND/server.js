require("dotenv").config()
const app = require("./src/app")


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

// console.log("API KEY:", process.env.GOOGLE_GEMINI_KEY);