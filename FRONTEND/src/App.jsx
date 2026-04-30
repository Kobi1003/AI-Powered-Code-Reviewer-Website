import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import axios from "axios";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown"; // Import the renderer
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`);

  const [review, setReview] = useState('');

  async function reviewCode() {
    try {
      const response = await axios.post("https://ai-powered-code-reviewer-website.onrender.com/ai/get-review", { code });
      setReview(response.data);
    } catch (error) {
      setReview("### Error\nCould not connect to the backend server.");
    }
  }

  // Handle the common "Editor is an object" import issue
  const CodeEditor = Editor.default || Editor;

  return (
    <main>
      {/* Left Section: Code Input */}
      <div className="left">
        <div className="code-container">
          <div className="header">
            <h4>Code</h4>
            <hr />
          </div>
          <div className="content">
            <CodeEditor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => Prism.highlight(code, Prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
                width: "100%",
                height: "100%"
              }}
            />
          </div>
          <div onClick={reviewCode} className="review-btn">Review</div>
        </div>
      </div>

      {/* Right Section: AI Review */}
      <div className="right">
        <div className="code-container">
          <div className="header">
            <h4>Review</h4>
            <hr />
          </div>
          <div className="content review-markdown">
             {/* This component turns Markdown strings into pretty HTML */}
             <Markdown
             
                rehypePlugins={[rehypeHighlight]} 

             >{review}</Markdown>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;