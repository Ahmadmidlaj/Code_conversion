
"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const codeRegex = /\b(function|class|import|export|const|let|var|IDENTIFICATION|PROGRAM-ID|DATA|WORKING-STORAGE|PROCEDURE|DIVISION|program|unit|library|uses|begin|end|interface|implementation|type|const|var|array|record|set|if|then|else|case|of|while|repeat|until|for|to|downto|procedure|function|constructor|destructor)\b/i;

const CodeTranslationChatbot = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState(
    "Hi! Paste your code and select a target language for translation."
  );
  const [targetLanguage, setTargetLanguage] = useState("Delphi");
  const [showCopyPopup, setShowCopyPopup] = useState(false);

  const genAI = new GoogleGenerativeAI("AIzaSyAMwM1unismKZbtaduQAOgdnn7MXmiY2QA");

  const generateResponse = async (prompt: string) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    setOutputText("Translating...");

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      setOutputText(response.text());
    } catch (error) {
      setOutputText("Oops! Something went wrong.");
    }
  };

  const handleTranslate = () => {
    const trimmedInput = inputText.trim();

    if (codeRegex.test(trimmedInput)) {
      const fullPrompt = `Translate this code to ${targetLanguage}: \n\n${trimmedInput}`;
      generateResponse(fullPrompt);
    } else {
      setOutputText("The input does not appear to be a valid code snippet.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText).then(() => {
      setShowCopyPopup(true);
      setTimeout(() => setShowCopyPopup(false), 2000);
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl w-full justify-center">
        {/* Input Section */}
        <div className="w-full md:w-[800px] h-[600px] bg-gray-800 rounded-lg shadow-lg">
          <header className="bg-indigo-600 px-4 py-2 rounded-t-lg flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">Code Translator (Input)</h2>
            <div className="flex items-center">
              <select
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="px-4 py-2 bg-gray-700 text-white rounded-l-lg"
              >
                {[
                  "Delphi",
                  "Cobol",
                  "Visual Basic",
                  "Python",
                  "Java",
                  "C++",
                  "C#",
                  "JavaScript",
                  "Ruby",
                  "Go",
                  "PHP",
                  "Perl",
                  "Swift",
                  "Kotlin",
                  "R",
                  "MATLAB",
                  "TypeScript",
                ].map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700"
                onClick={handleTranslate}
              >
                Translate
              </button>
            </div>
          </header>
          <div className="p-4">
            <textarea
              value={inputText}
              onChange={handleInputChange}
              placeholder="Paste your code here..."
              className="w-full p-4 bg-gray-700 rounded-lg resize-none outline-none text-white h-[500px]"
              spellCheck="false"
            ></textarea>
          </div>
        </div>

        {/* Output Section */}
        <div className="w-full md:w-[800px] h-[600px] bg-gray-800 rounded-lg shadow-lg">
          <header className="bg-indigo-600 px-4 py-2 rounded-t-lg flex justify-between items-center relative">
            <h2 className="text-xl font-semibold text-white">Code Translator (Output)</h2>
            <button
              className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700"
              onClick={handleCopy}
            >
              Copy
            </button>
            
            {showCopyPopup && (
              <div className="absolute top-0 right-0 transform translate-x-1 translate-y-12 bg-green-600 text-white py-2 px-4 rounded-lg">
                Code copied to clipboard!
              </div>
            )}
          </header>
          <div className="p-4 overflow-y-auto h-[500px]">
            <SyntaxHighlighter language={targetLanguage.toLowerCase()}>
              {outputText}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeTranslationChatbot;
