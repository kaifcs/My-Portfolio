/*
==============================================================================
AI CHATBOT FEATURE (TEMPORARILY DISABLED)

Reason:
- Removed from production portfolio.
- Can be restored anytime.

To restore:
1. Restore page import.
2. Restore rendering.
3. Enable API route.
4. Add GROQ_API_KEY.

Original implementation intentionally preserved.
==============================================================================
*/

// "use client";
// import { useState, useRef, useEffect } from "react";

// const AiChatbotSection = () => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);

//   // Auto-scroll to latest message
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, loading]);

//   // Focus input when chatbot opens
//   useEffect(() => {
//     if (open) {
//       inputRef.current?.focus();
//     }
//   }, [open]);

//   async function sendMessage() {
//     if (!input.trim() || loading) return;

//     const userMessage = input.trim();
//     setInput("");
//     setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
//     setLoading(true);

//     try {
//       const res = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userMessage }),
//       });

//       if (!res.ok) {
//         throw new Error(`API error: ${res.status}`);
//       }

//       const data = await res.json();

//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           text: data.reply || "I received your message but couldn't generate a response.",
//         },
//       ]);
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // Handle keyboard shortcuts
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   // Welcome message
//   const getWelcomeMessage = () => {
//     if (messages.length === 0) {
//       return (
//         <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 text-sm">
//           <div className="flex items-center gap-2 mb-2">
//             <span className="text-2xl">👋</span>
//             <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Hey there!
//             </span>
//           </div>
//           <p className="text-gray-300 leading-relaxed">
//             I&apos;m Kaif&apos;s AI assistant. Ask me anything about his projects, skills, experience, or background!
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-6 right-6 w-16 h-16 rounded-full
//           bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
//           shadow-[0_0_30px_rgba(168,85,247,0.6),0_0_60px_rgba(236,72,153,0.4)]
//           hover:shadow-[0_0_40px_rgba(168,85,247,0.8),0_0_80px_rgba(236,72,153,0.6)]
//           text-white text-2xl z-50
//           transition-all duration-300 ease-in-out
//           hover:scale-110 active:scale-95
//           group
//           border border-white/20
//           backdrop-blur-sm"
//         aria-label={open ? "Close AI Assistant" : "Open AI Assistant"}
//       >
//         <span className={`inline-block transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}>
//           {open ? '✕' : '🤖'}
//         </span>
        
//         {/* Pulse animation ring */}
//         <span className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping"></span>
//       </button>

//       {/* Chatbot Window */}
//       <div
//         className={`fixed bottom-28 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-8rem)]
//           z-50 transition-all duration-500 ease-out origin-bottom-right
//           ${open 
//             ? 'opacity-100 scale-100 translate-y-0' 
//             : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
//           }`}
//       >
//         <div className="w-full h-full
//           bg-gradient-to-br from-gray-900/90 via-purple-900/40 to-pink-900/40
//           backdrop-blur-2xl
//           border border-white/20
//           rounded-2xl
//           shadow-[0_0_50px_rgba(168,85,247,0.3),0_0_100px_rgba(236,72,153,0.2)]
//           flex flex-col
//           overflow-hidden">
          
//           {/* Header */}
//           <div className="relative p-5 border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 
//                   flex items-center justify-center text-xl
//                   shadow-[0_0_20px_rgba(168,85,247,0.5)]">
//                   🤖
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-white">AI Assistant</h3>
//                   <div className="flex items-center gap-1.5 text-xs text-gray-300">
//                     <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
//                     Online
//                   </div>
//                 </div>
//               </div>
              
//               <button
//                 onClick={() => setOpen(false)}
//                 className="w-8 h-8 rounded-lg hover:bg-white/10 
//                   transition-colors duration-200
//                   flex items-center justify-center text-gray-400 hover:text-white"
//                 aria-label="Close chat"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Messages Container */}
//           <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent">
//             {getWelcomeMessage()}
            
//             {messages.map((m, i) => (
//               <div
//                 key={i}
//                 className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} 
//                   animate-fadeIn`}
//               >
//                 <div
//                   className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed
//                     ${m.role === "user"
//                       ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_4px_20px_rgba(168,85,247,0.4)] rounded-br-md"
//                       : "bg-white/10 backdrop-blur-sm text-gray-100 border border-white/10 shadow-lg rounded-bl-md"
//                     }
//                     transition-all duration-300 hover:scale-[1.02]`}
//                 >
//                   {m.text}
//                 </div>
//               </div>
//             ))}

//             {/* Typing Indicator */}
//             {loading && (
//               <div className="flex justify-start animate-fadeIn">
//                 <div className="bg-white/10 backdrop-blur-sm border border-white/10 
//                   px-4 py-3 rounded-2xl rounded-bl-md shadow-lg">
//                   <div className="flex items-center gap-1.5">
//                     <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
//                       style={{ animationDelay: "0ms" }}></div>
//                     <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" 
//                       style={{ animationDelay: "150ms" }}></div>
//                     <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" 
//                       style={{ animationDelay: "300ms" }}></div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-4 border-t border-white/10 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
//             <div className="flex items-end gap-2">
//               <div className="flex-1 relative">
//                 <textarea
//                   ref={inputRef}
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyDown={handleKeyDown}
//                   placeholder="Ask about projects, skills, experience..."
//                   rows={1}
//                   className="w-full bg-white/5 backdrop-blur-sm border border-white/20
//                     rounded-xl px-4 py-3 text-gray-100 placeholder-gray-400
//                     focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50
//                     transition-all duration-200
//                     resize-none
//                     max-h-32
//                     scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent"
//                   style={{
//                     height: 'auto',
//                     minHeight: '44px',
//                   }}
//                   onInput={(e) => {
//                     e.target.style.height = 'auto';
//                     e.target.style.height = Math.min(e.target.scrollHeight, 128) + 'px';
//                   }}
//                 />
                
//                 {/* Hint text */}
//                 {!input && (
//                   <div className="absolute bottom-1 right-3 text-xs text-gray-500 pointer-events-none">
//                     Enter to send
//                   </div>
//                 )}
//               </div>

//               <button
//                 onClick={sendMessage}
//                 disabled={!input.trim() || loading}
//                 className="w-12 h-12 rounded-xl flex-shrink-0
//                   bg-gradient-to-r from-purple-500 to-pink-500
//                   hover:from-purple-600 hover:to-pink-600
//                   disabled:from-gray-600 disabled:to-gray-600
//                   disabled:cursor-not-allowed disabled:opacity-50
//                   transition-all duration-200
//                   hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
//                   active:scale-95
//                   flex items-center justify-center
//                   group"
//                 aria-label="Send message"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-white transition-transform duration-200 group-hover:translate-x-0.5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M5 12h14M12 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//             </div>
            
//             <p className="text-xs text-gray-400 mt-2 text-center">
//               Powered by AI • Shift+Enter for new line
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AiChatbotSection;