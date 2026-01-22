import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("draft");
    if (saved) {
      setText(saved);
    }
  }, []);

  useEffect(() => {
    if (text === "") return;
    localStorage.setItem("draft", text);
  }, [text]);

  return (
    <div className="app">
      <h1>React 67 – Auto-save draft</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Piši nekaj..."
      />

      <p className="hint">Samodejno shranjevanje…</p>
    </div>
  );
}
