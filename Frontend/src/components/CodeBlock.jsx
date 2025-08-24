// CodeBlock.jsx
import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import "prismjs/components/index"; // for all languages

const CodeBlock = ({ language = "javascript", code = "" }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <pre className="rounded-md overflow-x-auto p-3 m-2 bg-[#2d2d2d] text-sm">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;
