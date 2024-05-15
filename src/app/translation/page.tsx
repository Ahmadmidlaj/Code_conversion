// "use client"
// import React, { useState } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// const genAI = new GoogleGenerativeAI('AIzaSyAMwM1unismKZbtaduQAOgdnn7MXmiY2QA');

// const CodeTranslationChatbot = () => {
//   const [messages, setMessages] = useState<{ content: string; isOutgoing: boolean }[]>([
//     { content: 'Hi! Paste your code and select a target language for translation.', isOutgoing: false },
//   ]);
//   const [inputText, setInputText] = useState('');
//   const [targetLanguage, setTargetLanguage] = useState('Delphi');

//   const generateResponse = async (prompt: string) => {
//     const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
//     const requestOptions = {
//       maxOutputTokens: 100,
//       temperature: 0.7,
//       topP: 1,
//       topK: 50,
//     };

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { content: 'Thinking...', isOutgoing: false },
//     ]);

//     try {
//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       setMessages((prevMessages) => [
//         ...prevMessages.slice(0, -1),
//         { content: `Here is the translated code: ${response.text()}`, isOutgoing: false },
//       ]);
//     } catch (error) {
//       setMessages((prevMessages) => [
//         ...prevMessages.slice(0, -1),
//         { content: 'Oops! Something went wrong.', isOutgoing: false },
//       ]);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (inputText.trim()) {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { content: inputText, isOutgoing: true },
//       ]);
//       const fullPrompt = `Translate this code to ${targetLanguage}: \n\n${inputText}`;
//       generateResponse(fullPrompt);
//       setInputText('');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h1 className="text-3xl font-bold mb-8">Code Translation Chatbot</h1>
//       <div className="flex gap-8">
//         <div className="bg-gray-800 rounded-lg p-4 max-w-md">
//           <h2 className="text-xl font-semibold mb-4">Input</h2>
//           <div className="overflow-y-auto max-h-96 mb-4">
//             {/* {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${message.isOutgoing ? 'justify-end' : 'justify-start'} mb-2`}
//               >
//                 {!message.isOutgoing && (
//                   <span className="bg-indigo-600 text-white rounded-full px-3 py-1 mr-2">🤖</span>
//                 )}
//                 <p
//                   className={`px-4 py-2 rounded-lg ${
//                     message.isOutgoing ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-white'
//                   }`}
//                 >
//                   {message.content}
//                 </p>
//               </div>
//             ))} */}
//           </div>
//           <form onSubmit={handleSubmit} className="flex">
//             <select
//               value={targetLanguage}
//               onChange={(e) => setTargetLanguage(e.target.value)}
//               className="px-4 py-2 rounded-l-lg bg-gray-700 text-white"
//             >
//               <option value="Delphi">Delphi</option>
//               <option value="Cobol">Cobol</option>
//               <option value="Visual Basic">Visual Basic</option>
//               <option value="Python">Python</option>
//               <option value="Java">Java</option>
//               <option value="C++">C++</option>
//               <option value="C#">C#</option>
//               <option value="JavaScript">JavaScript</option>
//               <option value="Ruby">Ruby</option>
//               <option value="Go">Go</option>
//               <option value="PHP">PHP</option>
//               <option value="Perl">Perl</option>
//               <option value="Swift">Swift</option>
//               <option value="Kotlin">Kotlin</option>
//               <option value="R">R</option>
//               <option value="MATLAB">MATLAB</option>
//               <option value="TypeScript">TypeScript</option>
//             </select>
//             <input
//               type="text"
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)}
//               placeholder="Paste your code here..."
//               className="flex-grow px-4 py-2 bg-gray-700 text-white"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors duration-300 "
//             >
//               Send
//             </button>
//           </form>
//         </div>
//         <div className="bg-gray-800 rounded-lg p-4 max-w-md">
//           <h2 className="text-xl font-semibold mb-4">Output</h2>
//           <div className="overflow-y-auto max-h-96">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${message.isOutgoing ? 'justify-end' : 'justify-start'} mb-2`}
//               >
//                 {!message.isOutgoing && (
//                   <span className="bg-indigo-600 text-white rounded-full px-3 py-1 mr-2">🤖</span>
//                 )}
//                 <p
//                   className={`px-4 py-2 rounded-lg ${
//                     message.isOutgoing ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-white'
//                   }`}
//                 >
//                   {message.content}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeTranslationChatbot;
// "use client"
// import React, { useState } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// const genAI = new GoogleGenerativeAI('AIzaSyAMwM1unismKZbtaduQAOgdnn7MXmiY2QA');

// const CodeTranslationChatbot = () => {
//   const [inputText, setInputText] = useState('');
//   const [outputText, setOutputText] = useState('Hi! Paste your code and select a target language for translation.');
//   const [targetLanguage, setTargetLanguage] = useState('Delphi');

//   const generateResponse = async (prompt: string) => {
//     const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
//     const requestOptions = {
//       maxOutputTokens: 100,
//       temperature: 0.7,
//       topP: 1,
//       topK: 50,
//     };

//     setOutputText('Thinking...');

//     try {
//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       setOutputText(`Here is the translated code: ${response.text()}`);
//     } catch (error) {
//       setOutputText('Oops! Something went wrong.');
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (inputText.trim()) {
//       const fullPrompt = `Translate this code to ${targetLanguage}: \n\n${inputText}`;
//       generateResponse(fullPrompt);
//       setInputText('');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h1 className="text-3xl font-bold mb-8">Code Translation Chatbot</h1>
//       <div className="flex gap-8 flex-wrap justify-center">
//         <div className="bg-gray-800 rounded-lg p-4 max-w-md w-full md:w-auto">
//           <h2 className="text-xl font-semibold mb-4">Input</h2>
//           <form onSubmit={handleSubmit} className="flex flex-col">
//             <div className="flex mb-2">
//               <select
//                 value={targetLanguage}
//                 onChange={(e) => setTargetLanguage(e.target.value)}
//                 className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white mr-2"
//               >
//                 <option value="Delphi">Delphi</option>
//                 <option value="Cobol">Cobol</option>
//                 <option value="Visual Basic">Visual Basic</option>
//                 <option value="Python">Python</option>
//                 <option value="Java">Java</option>
//                 <option value="C++">C++</option>
//                 <option value="C#">C#</option>
//                 <option value="JavaScript">JavaScript</option>
//                 <option value="Ruby">Ruby</option>
//                 <option value="Go">Go</option>
//                 <option value="PHP">PHP</option>
//                 <option value="Perl">Perl</option>
//                 <option value="Swift">Swift</option>
//                 <option value="Kotlin">Kotlin</option>
//                 <option value="R">R</option>
//                 <option value="MATLAB">MATLAB</option>
//                 <option value="TypeScript">TypeScript</option>
//               </select>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
//               >
//                 Send
//               </button>
//             </div>
//             <input
//               type="text"
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)}
//               placeholder="Paste your code here..."
//               className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg"
//             />
//           </form>
//         </div>
//         <div className="bg-gray-800 rounded-lg p-4 max-w-md w-full md:w-auto">
//           <h2 className="text-xl font-semibold mb-4">Output</h2>
//           <div className="overflow-y-auto max-h-96">
//             <p className="px-4 py-2 rounded-lg bg-gray-700 text-white whitespace-pre-wrap">{outputText}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeTranslationChatbot;

//actual code
// "use client";
// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// const CodeTranslationChatbot = () => {
//   const [inputText, setInputText] = useState("");
//   const [outputText, setOutputText] = useState(
//     "Hi! Paste your code and select a target language for translation."
//   );
//   const [targetLanguage, setTargetLanguage] = useState("Delphi");
//   const [showCopyPopup, setShowCopyPopup] = useState(false);

//   const genAI = new GoogleGenerativeAI("AIzaSyAMwM1unismKZbtaduQAOgdnn7MXmiY2QA");

//   const generateResponse = async (prompt: string) => {
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     setOutputText("Translating...");

//     try {
//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       setOutputText(response.text());
//     } catch (error) {
//       setOutputText("Oops! Something went wrong.");
//     }
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (inputText.trim()) {
//       const fullPrompt = `Translate this code to ${targetLanguage}: \n\n${inputText}`;
//       generateResponse(fullPrompt);
//     }
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(outputText).then(() => {
//       setShowCopyPopup(true); 
//       setTimeout(() => setShowCopyPopup(false), 2000); // Hide the pop-up after 2 seconds
//     });
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     setInputText(e.target.value);
//   };

//   return (
    // <div className="relative flex h-screen items-center justify-center bg-gray-900 text-white">
    //   <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center">
    //     {/* Input Section */}
    //     <div className="w-full md:w-[400px] h-[350px] bg-gray-800 rounded-lg shadow-lg">
    //       <header className="bg-indigo-600 px-4 py-2 rounded-t-lg">
    //         <h2 className="text-xl font-semibold text-white">Code Translator (Input)</h2>
    //       </header>
    //       <div className="p-4">
    //         <form onSubmit={handleSubmit}>
    //           <textarea
    //             value={inputText}
    //             onChange={handleInputChange}
    //             placeholder="Paste your code here..."
    //             className="w-full p-4 bg-gray-700 rounded-lg resize-none outline-none text-white"
    //             spellCheck="false"
    //             rows={8}
    //           ></textarea>
    //           <div className="flex justify-between items-center mt-4">
    //             <select
    //               value={targetLanguage}
    //               onChange={(e) => setTargetLanguage(e.target.value)}
    //               className="w-1/2 px-4 py-2 bg-gray-700 text-white rounded-lg"
    //             >
    //               {[
    //                 "Delphi",
    //                 "Cobol",
    //                 "Visual Basic",
    //                 "Python",
    //                 "Java",
    //                 "C++",
    //                 "C#",
    //                 "JavaScript",
    //                 "Ruby",
    //                 "Go",
    //                 "PHP",
    //                 "Perl",
    //                 "Swift",
    //                 "Kotlin",
    //                 "R",
    //                 "MATLAB",
    //                 "TypeScript",
    //               ].map((lang) => (
    //                 <option key={lang} value={lang}>
    //                   {lang}
    //                 </option>
    //               ))}
    //             </select>
    //             <button
    //               type="submit"
    //               className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
    //             >
    //               Translate
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>

    //     {/* Output Section */}
    //     <div className="w-full md:w-[400px] h-[350px] bg-gray-800 rounded-lg shadow-lg">
    //       <header className="bg-indigo-600 px-4 py-2 rounded-t-lg flex justify-between items-center relative">
    //         <h2 className="text-xl font-semibold text-white">Code Translator (Output)</h2>
    //         <button
    //           className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700"
    //           onClick={handleCopy}
    //         >
    //           Copy
    //         </button>
            
    //         {showCopyPopup && (
    //           <div className="absolute top-0 right-0 transform translate-x-1 translate-y-12 bg-green-600 text-white py-2 px-4 rounded-lg">
    //             Code copied to clipboard!
    //           </div>
    //         )}
    //       </header>
    //       <div className="p-4 overflow-y-auto h-[250px]">
    //         <SyntaxHighlighter language={targetLanguage.toLowerCase()}>
    //           {outputText}
    //         </SyntaxHighlighter>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default CodeTranslationChatbot;
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