// CodeBlock.jsx
import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import "prismjs/components/index"; // for all languages
import { useState } from "react";
import Editor from 'react-simple-code-editor'
import { useRef } from "react";

const CodeBlock = ({ language = "javascript", initialCode = "" }) => {
    const [code, setCode] = useState(initialCode)
     const [isFocused, setIsFocused] = useState(false);
    const editorRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <div className="w-full h-[600px] max-sm:h-[280px] p-2"
        style={{
        border: isFocused ? "1px solid #2563eb" : "0.5px solid #1e3a8a",
        borderRadius: "0.5rem",
        cursor: "text", // show text cursor
        }}
        onClick={() => {
        // when clicking anywhere, focus editor
            if (editorRef.current) {
            editorRef.current._input.focus();
            }
        }}
    >
    <Editor 
    ref={editorRef}
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => Prism.highlight(code,Prism.languages[language],language)}
        padding={10}
        onFocus={() => setIsFocused(true)}
        style={{
        fontFamily: '"Fira Code", "Fira Mono", monospace',
        fontSize: 15,
        borderRadius: "0.5rem",
        color: "#f8f8f2",
        outline: "none", // remove focus outline
        minHeight: "100%", // make editor fill container
        }}
    />
    </div>
    // <pre className="rounded-md overflow-x-auto p-3 m-2 bg-[#2d2d2d] text-sm">
    //   <code className={`language-${language}`}>{code}</code>
    // </pre>
  );
};

export default CodeBlock;
