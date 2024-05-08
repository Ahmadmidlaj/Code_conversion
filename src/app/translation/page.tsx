"use client"
import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyAMwM1unismKZbtaduQAOgdnn7MXmiY2QA');

const CodeTranslationChatbot = () => {
  const [messages, setMessages] = useState<{ content: string; isOutgoing: boolean }[]>([
    { content: 'Hi! Paste your code and select a target language for translation.', isOutgoing: false },
  ]);
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('Delphi');

  const generateResponse = async (prompt: string) => {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const requestOptions = {
      maxOutputTokens: 100,
      temperature: 0.7,
      topP: 1,
      topK: 50,
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      { content: 'Thinking...', isOutgoing: false },
    ]);

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { content: `Here is the translated code: ${response.text()}`, isOutgoing: false },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { content: 'Oops! Something went wrong.', isOutgoing: false },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: inputText, isOutgoing: true },
      ]);
      const fullPrompt = `Translate this code to ${targetLanguage}: \n\n${inputText}`;
      generateResponse(fullPrompt);
      setInputText('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8">Code Translation Chatbot</h1>
      <div className="flex gap-8">
        <div className="bg-gray-800 rounded-lg p-4 max-w-md">
          <h2 className="text-xl font-semibold mb-4">Input</h2>
          <div className="overflow-y-auto max-h-96 mb-4">
            {/* {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isOutgoing ? 'justify-end' : 'justify-start'} mb-2`}
              >
                {!message.isOutgoing && (
                  <span className="bg-indigo-600 text-white rounded-full px-3 py-1 mr-2">🤖</span>
                )}
                <p
                  className={`px-4 py-2 rounded-lg ${
                    message.isOutgoing ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-white'
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))} */}
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <select
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
              className="px-4 py-2 rounded-l-lg bg-gray-700 text-white"
            >
              <option value="Delphi">Delphi</option>
              <option value="Cobol">Cobol</option>
              <option value="Visual Basic">Visual Basic</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              <option value="C#">C#</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Ruby">Ruby</option>
              <option value="Go">Go</option>
              <option value="PHP">PHP</option>
              <option value="Perl">Perl</option>
              <option value="Swift">Swift</option>
              <option value="Kotlin">Kotlin</option>
              <option value="R">R</option>
              <option value="MATLAB">MATLAB</option>
              <option value="TypeScript">TypeScript</option>
            </select>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your code here..."
              className="flex-grow px-4 py-2 bg-gray-700 text-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 max-w-md">
          <h2 className="text-xl font-semibold mb-4">Output</h2>
          <div className="overflow-y-auto max-h-96">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isOutgoing ? 'justify-end' : 'justify-start'} mb-2`}
              >
                {!message.isOutgoing && (
                  <span className="bg-indigo-600 text-white rounded-full px-3 py-1 mr-2">🤖</span>
                )}
                <p
                  className={`px-4 py-2 rounded-lg ${
                    message.isOutgoing ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-white'
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeTranslationChatbot;