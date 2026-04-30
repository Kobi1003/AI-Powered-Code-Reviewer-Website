Backend: cd BACKEND && npm install && npm start

Frontend: cd FRONTEND && npm install && npm run dev


AI-Powered Code Reviewer

This application is a full-stack developer tool designed to provide an instant "second pair of eyes" on your code. It combines a professional, interactive code editor with the intelligence of Large Language Models (LLMs) to help developers catch bugs, improve performance, and follow best practices in real-time.

Core Experience
Interactive Workspace: Featuring a sleek dark-mode UI, the frontend utilizes PrismJS to provide real-time syntax highlighting within a responsive, lightweight editor.

AI-Driven Logic Reviews: Integrated with the Google Gemini AI API, the tool analyzes logic, identifies "code smells," and suggests idiomatic refactors.

Structured Formatting: By utilizing Markdown rendering, AI feedback is transformed from a "wall of text" into organized headers, bullet points, and clean code blocks for maximum readability.

Side-by-Side Comparison: The dual-pane layout ensures you never lose context, allowing you to view your original code and the AI's suggestions simultaneously.

Technical Architecture
Frontend: Built with React and Vite for lightning-fast performance, using react-simple-code-editor and react-markdown.

Backend: A robust Node.js and Express server that securely handles API communication and environment variable management.

Design: A custom-styled CSS framework focusing on developer-centric aesthetics, featuring a scrollable, bordered UI that mirrors professional IDEs.

Why It Matters
Writing code that "works" is only the first step. This tool bridges the gap to writing code that is excellent, providing a senior-level review experience that fits right into your local development workflow.