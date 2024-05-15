

//   "use client"
//   import { SetStateAction, useState } from 'react';
//   import { GoogleGenerativeAI } from "@google/generative-ai";
//   import { encryptData } from '@/lib/encryption';
//   import { decryptData } from '@/lib/encryption';
//   export default function Doc() {
//     const [chatInput, setChatInput] = useState('');
//     const [chatOutput, setChatOutput] = useState("Hi! Please paste your code below to generate a complete analysis of the code base.");
//     const [showCopyPopup, setShowCopyPopup] = useState(false);

//     const genAI = new GoogleGenerativeAI("AIzaSyAMwM1unismKZbtaduQAOgdnn7MXmiY2QA");

//     const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
//       setChatInput(e.target.value);
//     };

// //     const handleChatSubmission = async () => {
// //       if (!chatInput.trim()) return;
// //       setChatOutput('Generating analysis...');

// //       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
// //       const requestOptions = {
// //         maxOutputTokens: 100,
// //         temperature: 0.7,
// //         topP: 1,
// //         topK: 50,
// //       };

// //     //   try {
// //     //     const encryptedInput = encryptData(chatInput);
// //     //     const result = await model.generateContent("Please provide a comprehensive analysis of the following codebase, covering all relevant aspects such as code structure, performance, security, and maintainability:\n\n" + encryptedInput);
// //     //     const response = await result.response;
// //     //     const botResponse = 'Your analysis:\n\n' + response.text();
// //     //     setChatOutput(botResponse);
// //     //   } catch (error) {
// //     //     setChatOutput('Oops! Something went wrong.');
// //     //   }
// //     //   setChatInput('');
// //     // };
// //   //   try {
// //   //     const encryptedInput = encryptData(chatInput);
// //   //     const result = await model.generateContent("Please provide a comprehensive analysis of the following codebase, covering all relevant aspects such as code structure, performance, security, and maintainability:\n\n" + encryptedInput);
// //   //     const response = await result.response;
// //   //     const encryptedResponse = response.text();
// //   //     const decryptedResponse = decryptData(encryptedResponse);
// //   //     const botResponse = 'Your analysis:\n\n' + decryptedResponse;
// //   //     setChatOutput(botResponse);
// //   //   } catch (error) {
// //   //     setChatOutput('Oops! Something went wrong.');
// //   //   }
// //   //   setChatInput('');
// //   // };
// //   try {
// //     const encryptedInput = encryptData(chatInput);
// //     console.log('Encrypted input:', encryptedInput); // Add this line

// //     const result = await model.generateContent("Please provide a comprehensive analysis of the following codebase, covering all relevant aspects such as code structure, performance, security, and maintainability:\n\n" + encryptedInput);
// //     const response = await result.response;
// //     const encryptedResponse = response.text();
// //     console.log('Encrypted response:', encryptedResponse); // Add this line

// //     const decryptedResponse = decryptData(encryptedResponse);
// //     const botResponse = 'Your analysis:\n\n' + decryptedResponse;
// //     setChatOutput(botResponse);
// //   } catch (error) {
// //     setChatOutput('Oops! Something went wrong.');
// //   }
// //   setChatInput('');
// // };


// const handleChatSubmission = async () => {
//   if (!chatInput.trim()) return;
//   setChatOutput('Generating analysis...');

//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//   const requestOptions = {
//     maxOutputTokens: 100,
//     temperature: 0.7,
//     topP: 1,
//     topK: 50,
//   };

//   try {
//     const encryptedInput = encryptData(chatInput);
//     const result = await model.generateContent("Please provide a comprehensive analysis of the following codebase, covering all relevant aspects such as code structure, performance, security, and maintainability and also problems with the code if any:\n\n" + encryptedInput);
//     const response = await result.response;
//     const encryptedResponse = response.text();
//     const decryptedResponse = decryptData(encryptedResponse);
//     // const botResponse = 'Your analysis:\n\n' + response.text();
//     const botResponse = 'Your analysis:\n\n' + decryptedResponse;
//     setChatOutput(botResponse);
//   } catch (error) {
//     setChatOutput('Oops! Something went wrong.');
//   }
//   setChatInput('');
// };

//     const handleCopy = () => {
//       navigator.clipboard.writeText(chatOutput).then(() => {
//         setShowCopyPopup(true); 
//         setTimeout(() => setShowCopyPopup(false), 2000); // Hide after 2 seconds
//       });
//     };

//     return (
//       <div className="flex h-screen justify-center items-center bg-gray-900 text-white">
//         <div className="flex flex-col md:flex-row gap-8 max-w-5xl">
//           <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg">
//             <header className="bg-purple-700 px-4 py-2 rounded-t-lg">
//               <h2 className="text-xl font-semibold text-white">Code Analysis</h2>
//             </header>
//             <div className="p-4">
//               <textarea
//                 className="w-full p-4 bg-gray-700 rounded-lg resize-none outline-none text-white mb-2"
//                 placeholder="Paste your code here and click send..."
//                 spellCheck="false"
//                 value={chatInput}
//                 onChange={handleInputChange}
//                 rows={5}
//               ></textarea>
//               <button
//                 className="material-symbols-rounded bg-purple-700 text-white p-4 rounded-lg hover:bg-purple-600 focus:outline-none w-full"
//                 onClick={handleChatSubmission}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
          
//           <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg">
//             <header className="bg-purple-700 px-4 py-2 rounded-t-lg flex justify-between items-center relative">
//               <h2 className="text-xl font-semibold text-white">Generated Analysis</h2>
//               <button
//                 className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
//                 onClick={handleCopy}
//               >
//                 Copy
//               </button>
              
//               {showCopyPopup && (
//                 <div className="absolute right-0 top-0 transform translate-x-1 translate-y-12 bg-green-600 text-white py-2 px-4 rounded-lg">
//                   Analysis copied!
//                 </div>
//               )}
//             </header>
//             <div className="p-4">
//               <div className="chatbox overflow-y-auto max-h-96 bg-gray-700 rounded-lg p-4 text-white whitespace-pre-wrap">
//                 {chatOutput}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//actual code
// "use client"
// import { SetStateAction, useState } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// export default function Doc() {
//   const [chatInput, setChatInput] = useState('');
//   const [chatOutput, setChatOutput] = useState("Hi! Please paste your code below to generate a complete analysis of the code base.");
//   const [showCopyPopup, setShowCopyPopup] = useState(false);

//   const genAI = new GoogleGenerativeAI("AIzaSyAMwM1unismKZbtaduQAOgdnn7MXmiY2QA");

//   const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
//     setChatInput(e.target.value);
//   };

//   const handleChatSubmission = async () => {
//     if (!chatInput.trim()) return;
//     setChatOutput('Generating analysis...');

//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const requestOptions = {
//       maxOutputTokens: 100,
//       temperature: 0.7,
//       topP: 1,
//       topK: 50,
//     };

//     try {
//       // const result = await model.generateContent("Create a complete analysis of the following code base, including details on classes, variables, dependencies, and functionality:\n\n" + chatInput);
//       const result = await model.generateContent(" Please provide a comprehensive analysis of the following codebase, covering all relevant aspects such as code structure, performance, security, and maintainability:\n\n" + chatInput);
//       const response = await result.response;
//       const botResponse = 'Your analysis:\n\n' + response.text();
//       setChatOutput(botResponse);
//     } catch (error) {
//       setChatOutput('Oops! Something went wrong.');
//     }
//     setChatInput('');
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(chatOutput).then(() => {
//       setShowCopyPopup(true); 
//       setTimeout(() => setShowCopyPopup(false), 2000); // Hide after 2 seconds
//     });
//   };

//   return (
//     <div className="flex h-screen justify-center items-center bg-gray-900 text-white">
//       <div className="flex flex-col md:flex-row gap-8 max-w-5xl">
//         <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg">
//           <header className="bg-purple-700 px-4 py-2 rounded-t-lg">
//             <h2 className="text-xl font-semibold text-white">Code Analysis</h2>
//           </header>
//           <div className="p-4">
//             <textarea
//               className="w-full p-4 bg-gray-700 rounded-lg resize-none outline-none text-white mb-2"
//               placeholder="Paste your code here and click send..."
//               spellCheck="false"
//               value={chatInput}
//               onChange={handleInputChange}
//               rows={5}
//             ></textarea>
//             <button
//               className="material-symbols-rounded bg-purple-700 text-white p-4 rounded-lg hover:bg-purple-600 focus:outline-none w-full"
//               onClick={handleChatSubmission}
//             >
//               Send
//             </button>
//           </div>
//         </div>
        
//         <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg">
//           <header className="bg-purple-700 px-4 py-2 rounded-t-lg flex justify-between items-center relative">
//             <h2 className="text-xl font-semibold text-white">Generated Analysis</h2>
//             <button
//               className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
//               onClick={handleCopy}
//             >
//               Copy
//             </button>
            
//             {showCopyPopup && (
//               <div className="absolute right-0 top-0 transform translate-x-1 translate-y-12 bg-green-600 text-white py-2 px-4 rounded-lg">
//                 Analysis copied!
//               </div>
//             )}
//           </header>
//           <div className="p-4">
//             <div className="chatbox overflow-y-auto max-h-96 bg-gray-700 rounded-lg p-4 text-white whitespace-pre-wrap">
//               {chatOutput}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"
import { SetStateAction, useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Doc() {
  const [chatInput, setChatInput] = useState('');
  const [chatOutput, setChatOutput] = useState("Hi! Please paste your code below to generate a complete analysis of the code base.");
  const [showCopyPopup, setShowCopyPopup] = useState(false);

  const genAI = new GoogleGenerativeAI("AIzaSyAMwM1unismKZbtaduQAOgdnn7MXmiY2QA");

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setChatInput(e.target.value);
  };

  const handleChatSubmission = async () => {
    if (!chatInput.trim()) {
      setChatOutput('Please paste some code to generate an analysis.');
      return;
    }

    // Check if the input is a valid programming code
    const codeRegex = /\b(function|class|import|export|const|let|var|IDENTIFICATION|PROGRAM-ID|DATA|WORKING-STORAGE|PROCEDURE|DIVISION)\b/i;
    if (!codeRegex.test(chatInput)) {
      setChatOutput('Error: The input does not appear to be a valid programming code. Please provide a valid codebase for analysis.');
      return;
    }

    setChatOutput('Generating analysis...');

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const requestOptions = {
      maxOutputTokens: 100,
      temperature: 0.7,
      topP: 1,
      topK: 50,
    };

    try {
      const result = await model.generateContent(" Please provide a comprehensive analysis of the following codebase, covering all relevant aspects such as code structure, performance, security, and maintainability and also if there are any major errors ,list then on top and then generate rest:\n\n" + chatInput);
      const response = await result.response;
      const botResponse = 'Your analysis:\n\n' + response.text();
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

  // Rest of the code remains the same
  return (
    <div className="flex h-screen justify-center items-center bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl">
        <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg">
          <header className="bg-purple-700 px-4 py-2 rounded-t-lg">
            <h2 className="text-xl font-semibold text-white">Code Analysis</h2>
          </header>
          <div className="p-4">
            <textarea
              className="w-full p-4 bg-gray-700 rounded-lg resize-none outline-none text-white mb-2"
              placeholder="Paste your code here and click send..."
              spellCheck="false"
              value={chatInput}
              onChange={handleInputChange}
              rows={5}
            ></textarea>
            <button
              className="material-symbols-rounded bg-purple-700 text-white p-4 rounded-lg hover:bg-purple-600 focus:outline-none w-full"
              onClick={handleChatSubmission}
            >
              Send
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg">
          <header className="bg-purple-700 px-4 py-2 rounded-t-lg flex justify-between items-center relative">
            <h2 className="text-xl font-semibold text-white">Generated Analysis</h2>
            <button
              className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
              onClick={handleCopy}
            >
              Copy
            </button>
            
            {showCopyPopup && (
              <div className="absolute right-0 top-0 transform translate-x-1 translate-y-12 bg-green-600 text-white py-2 px-4 rounded-lg">
                Analysis copied!
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





//only encryption to check the working of encryption and description
// "use client"
// import { SetStateAction, useState } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { encryptData } from '@/lib/encryption';

// export default function Doc() {
//   const [chatInput, setChatInput] = useState('');
//   const [chatOutput, setChatOutput] = useState("Hi! Please paste your code below to generate a complete analysis of the code base.");
//   const [showCopyPopup, setShowCopyPopup] = useState(false);

//   const genAI = new GoogleGenerativeAI("AIzaSyAMwM1unismKZbtaduQAOgdnn7MXmiY2QA");

//   const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
//     setChatInput(e.target.value);
//   };

//   const handleChatSubmission = async () => {
//     if (!chatInput.trim()) return;
//     setChatOutput('Generating analysis...');

//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const requestOptions = {
//       maxOutputTokens: 100,
//       temperature: 0.7,
//       topP: 1,
//       topK: 50,
//     };

//     try {
//       const encryptedInput = encryptData(chatInput);
//       const result = await model.generateContent("Please provide a comprehensive analysis of the following codebase, covering all relevant aspects such as code structure, performance, security, and maintainability:\n\n" + encryptedInput);
//       const response = await result.response;
//       const botResponse = 'Your analysis:\n\n' + response.text();
//       setChatOutput(botResponse);
//     } catch (error) {
//       setChatOutput('Oops! Something went wrong.');
//     }
//     setChatInput('');
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(chatOutput).then(() => {
//       setShowCopyPopup(true); 
//       setTimeout(() => setShowCopyPopup(false), 2000); // Hide after 2 seconds
//     });
//   };

//   return (
//     <div className="flex h-screen justify-center items-center bg-gray-900 text-white">
//       <div className="flex flex-col md:flex-row gap-8 max-w-5xl">
//         <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg">
//           <header className="bg-purple-700 px-4 py-2 rounded-t-lg">
//             <h2 className="text-xl font-semibold text-white">Code Analysis</h2>
//           </header>
//           <div className="p-4">
//             <textarea
//               className="w-full p-4 bg-gray-700 rounded-lg resize-none outline-none text-white mb-2"
//               placeholder="Paste your code here and click send..."
//               spellCheck="false"
//               value={chatInput}
//               onChange={handleInputChange}
//               rows={5}
//             ></textarea>
//             <button
//               className="material-symbols-rounded bg-purple-700 text-white p-4 rounded-lg hover:bg-purple-600 focus:outline-none w-full"
//               onClick={handleChatSubmission}
//             >
//               Send
//             </button>
//           </div>
//         </div>
        
//         <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg">
//           <header className="bg-purple-700 px-4 py-2 rounded-t-lg flex justify-between items-center relative">
//             <h2 className="text-xl font-semibold text-white">Generated Analysis</h2>
//             <button
//               className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
//               onClick={handleCopy}
//             >
//               Copy
//             </button>
            
//             {showCopyPopup && (
//               <div className="absolute right-0 top-0 transform translate-x-1 translate-y-12 bg-green-600 text-white py-2 px-4 rounded-lg">
//                 Analysis copied!
//               </div>
//             )}
//           </header>
//           <div className="p-4">
//             <div className="chatbox overflow-y-auto max-h-96 bg-gray-700 rounded-lg p-4 text-white whitespace-pre-wrap">
//               {chatOutput}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

