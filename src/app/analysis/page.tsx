// // pages/index.tsx
// "use client"
// import { SetStateAction, useState } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// export default function Home() {
//   const [chatInput, setChatInput] = useState('');
//   const [chatMessages, setChatMessages] = useState([{ user: 'bot', message: "Hi! Paste some code and I'll help you with detailed analysis." }]);

//   const genAI = new GoogleGenerativeAI("AIzaSyBAX_z9O3M8LBZHLYU5jE6X62axupBbx_4"); // Replace YOUR_API_KEY with your actual API key

//   // const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
//   //   setChatInput(e.target.value);
//   // };

//   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setChatInput(e.target.value);
//   };
//   const handleChatSubmission = async () => {
//     if (!chatInput.trim()) return;

//     setChatMessages([...chatMessages, { user: 'user', message: chatInput }]);
//     setChatInput('');

//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const requestOptions = {
//       maxOutputTokens: 100,
//       temperature: 0.7,
//       topP: 1,
//       topK: 50,
//     };

//     const incomingMessage = { user: 'bot', message: 'Thinking...' };
//     setChatMessages([...chatMessages, incomingMessage]);

//     try {
//       const result = await model.generateContent(chatInput);
//       const response = await result.response;
//       const botResponse = { user: 'bot', message: 'Here is the detailed analysis of your codebase: ' + response.text() };
//       setChatMessages([...chatMessages.filter(msg => msg !== incomingMessage), botResponse]);
//     } catch (error) {
//       const errorMessage = { user: 'bot', message: 'Oops! Something went wrong.' };
//       setChatMessages([...chatMessages.filter(msg => msg !== incomingMessage), errorMessage]);
//     }
//   };

//   return (
//     <div className="flex h-screen justify-center items-center bg-gray-900 text-white">
//       <div className="flex space-x-8">
//         <div className="w-96 bg-white rounded-lg shadow-lg">
//           <header className="bg-purple-700 px-4 py-2">
//             <h2 className="text-xl font-semibold text-white">Code Analysis Chatbot 1 (Input)</h2>
//           </header>
//           {/* <ul className="chatbox text-black">
//             {chatMessages.map((msg, index) => (
//               <li key={index} className={`chat ${msg.user === 'user' ? 'outgoing' : 'incoming'}`}>
//                 {msg.user === 'bot' && <span>🤖</span>}
//                 <p>{msg.message}</p>
//               </li>
//             ))}
//           </ul> */}
//           <div className="chat-input">
//             <textarea
//               className="w-full h-32 p-4 bg-gray-200 rounded-lg resize-none outline-none text-black"
//               placeholder="Paste your code here and click send..."
//               value={chatInput}
//               onChange={handleInputChange}
//               spellCheck="false"
//             ></textarea>
//             <button className="material-symbols-rounded bg-purple-700 text-white p-4 rounded-full hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={handleChatSubmission}>send</button>
//           </div>
//         </div>
//         <div className="w-96 bg-white rounded-lg shadow-lg">
//           <header className="bg-purple-700 px-4 py-2">
//             <h2 className="text-xl font-semibold text-white">Code Analysis Chatbot 2 (Output)</h2>
//           </header>
//           <ul className="chatbox text-black">
//             {chatMessages.map((msg, index) => (
//               <li key={index} className={`chat ${msg.user === 'user' ? 'outgoing' : 'incoming'}`}>
//                 {msg.user === 'bot' && <span>🤖</span>}
//                 <p>{msg.message}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { SetStateAction, useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Home() {
  const [chatInput, setChatInput] = useState('');
  const [chatOutput, setChatOutput] = useState("Hi! Paste some code and I'll help you with detailed analysis.");
  const [showCopyPopup, setShowCopyPopup] = useState(false);

  const genAI = new GoogleGenerativeAI("AIzaSyAMwM1unismKZbtaduQAOgdnn7MXmiY2QA");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatInput(e.target.value);
  };

  const handleChatSubmission = async () => {
    if (!chatInput.trim()) return;
    setChatOutput('Analysing...');

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const requestOptions = {
      maxOutputTokens: 100,
      temperature: 0.7,
      topP: 1,
      topK: 50,
    };

    try {
      const result = await model.generateContent(chatInput);
      const response = await result.response;
      const botResponse = 'Here is the detailed analysis of your codebase:\n\n' + response.text();
      setChatOutput(botResponse);
    } catch (error) {
      setChatOutput('Oops! Something went wrong.');
    }
    setChatInput('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(chatOutput).then(() => {
      setShowCopyPopup(true);
      setTimeout(() => setShowCopyPopup(false), 2000); // Hide after 2 seconds
    });
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl">
        <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg">
          <header className="bg-rose-700 px-4 py-2 rounded-t-lg">
            <h2 className="text-xl font-semibold text-white">Code Analysis (Provide Your Code Below)</h2>
          </header>
          <div className="p-4">
            <textarea
              className="w-full p-4 bg-gray-700 rounded-lg resize-none outline-none text-white"
              placeholder="Paste your code here and click send..."
              value={chatInput}
              onChange={handleInputChange}
              spellCheck="false"
              rows={5}
            />
            <button
              className="material-symbols-rounded bg-rose-700 text-white p-4 rounded-lg hover:bg-rose-600 focus:outline-none focus:bg-rose-600 w-full"
              onClick={handleChatSubmission}
            >
              send
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg">
          <header className="bg-rose-700 px-4 py-2 rounded-t-lg flex justify-between items-center relative">
            <h2 className="text-xl font-semibold text-white">Generated Code Analysis</h2>
            <button
              className="bg-rose-700 text-white px-4 py-2 rounded-lg hover:bg-rose-600"
              onClick={handleCopy}
            >
              Copy
            </button>

            {showCopyPopup && (
              <div className="absolute top-0 right-0 transform translate-x-1 translate-y-12 bg-green-600 text-white py-2 px-4 rounded-lg">
                Analysis copied to clipboard!
              </div>
            )}
          </header>
          <div className="p-4">
            <div className="chatbox overflow-y-auto max-h-96 bg-gray-700 rounded-lg p-4 text-white whitespace-pre-wrap">
              {chatOutput}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

