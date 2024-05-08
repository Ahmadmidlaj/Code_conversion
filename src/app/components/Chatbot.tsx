"use client"
import { GoogleGenerativeAI } from "@google/generative-ai";
import React from "react";
const genAI = new GoogleGenerativeAI("AIzaSyBAX_z9O3M8LBZHLYU5jE6X62axupBbx_4");

const createChatLi = (message: string, className: string, isOutgoing = true) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  const content = isOutgoing
    ? `<p>${message}</p>`
    : `<span>🤖</span><p>${message}</p>`;
  chatLi.innerHTML = content;
  return chatLi;
};

const generateResponse = async (prompt: string, chatbox: HTMLUListElement) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const requestOptions = {
    maxOutputTokens: 100,
    temperature: 0.7,
    topP: 1,
    topK: 50,
  };

  const incomingChat = createChatLi("Thinking...", "incoming", false);
  chatbox.appendChild(incomingChat);
  chatbox.scrollTo(0, chatbox.scrollHeight);

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    incomingChat.querySelector("p")!.textContent = response.text();
  } catch (error) {
    incomingChat.querySelector("p")!.textContent = "Oops! Something went wrong.";
  }
};

const handleChat = (chatbox1: HTMLUListElement, chatbox2: HTMLUListElement, chatInput: HTMLTextAreaElement) => {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = "";
  chatInput.style.height = "55px";

  const outgoingChat = createChatLi(userMessage, "outgoing");
  chatbox1.appendChild(outgoingChat);
  chatbox1.scrollTo(0, chatbox1.scrollHeight);

  generateResponse(userMessage, chatbox2); // Response goes to the second chatbot
};

export default function Chatbot() {
  const chatbox1Ref = React.useRef<HTMLUListElement>(null);
  const chatbox2Ref = React.useRef<HTMLUListElement>(null);
  const chatInputRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    const chatbox1 = chatbox1Ref.current;
    const chatbox2 = chatbox2Ref.current;
    const chatInput = chatInputRef.current;

    if (chatbox1 && chatbox2 && chatInput) {
      chatInput.addEventListener("input", () => {
        chatInput.style.height = "55px";
        chatInput.style.height = `${chatInput.scrollHeight}px`;
      });

      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
          e.preventDefault();
          handleChat(chatbox1, chatbox2, chatInput);
        }
      });
    }
  }, []);

  return (
    <main className="flex h-screen items-center justify-center bg-gray-900">
      <div className="flex gap-4">
        {/* First chatbot (input) */}
        <div className="w-96 rounded-lg bg-white shadow-lg">
          <header className="bg-purple-600 py-4 text-center text-white">
            <h2 className="text-xl font-semibold">Chatbot 1 (Input)</h2>
          </header>
          <ul ref={chatbox1Ref} className="chatbox h-[510px] overflow-y-auto p-6 t">
            <li className="chat flex justify-start mb-4">
              <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                🤖
              </span>
              <div className="rounded-br-none rounded-lg bg-gray-200 p-4 text-black">
                <p>Hi there 👋<br />How can I help you today?</p>
              </div>
            </li>
          </ul>
          <div className="border-t border-gray-200 bg-white p-3">
            <textarea
              ref={chatInputRef}
              className="w-full resize-none rounded-lg bg-gray-100 p-2.5 text-black"
              placeholder="Enter a message..."
              spellCheck="false"
            />
          </div>
        </div>

        {/* Second chatbot (output) */}
        <div className="w-96 rounded-lg bg-white shadow-lg">
          <header className="bg-purple-600 py-4 text-center text-white">
            <h2 className="text-xl font-semibold">Chatbot 2 (Output)</h2>
          </header>
          <ul ref={chatbox2Ref} className="chatbox h-[510px] overflow-y-auto p-6 text-black">
            <li className="chat flex justify-start mb-4">
              <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                🤖
              </span>
              <div className="rounded-br-none rounded-lg bg-gray-200 p-4 text-black">
                <p>Hi there 👋<br />Welcome!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}