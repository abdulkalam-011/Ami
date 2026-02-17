import { useRef, useState, useEffect } from "react";
import { BsArrowBarLeft } from "react-icons/bs";

const ChatArea = ({ selectedChat, setSelectedChat }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Baal katawe chalbo", sender: "me", time: "9:21 am" },
    { id: 2, text: "Aao", sender: "them", time: "9:21 am" },
    { id: 3, text: "Bahr aao", sender: "me", time: "9:21 am" },
  ]);

  const date = new Date().toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [inputText, setInputText] = useState("");
  const [activeMenuId, setActiveMenuId] = useState(null);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputText,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  const toggleTranslateMenu = (id) => {
    setActiveMenuId(activeMenuId === id ? null : id);
  };

  return (
    <div className="flex flex-col h-screen w-full relative">
      <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 border-b border-gray-300 dark:border-green-700 bg-white dark:bg-green-900">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-700 dark:text-white text-2xl"
            onClick={() => setSelectedChat(null)}
          >
            <BsArrowBarLeft />
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-green-400 flex items-center justify-center">
            {selectedChat?.profile_pic ? (
              <img
                src={selectedChat.profile_pic}
                alt={selectedChat.username}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {selectedChat?.username?.charAt(0)?.toUpperCase() || "J"}
              </span>
            )}
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {selectedChat?.username || "Zameer Bhai"}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              click here for contact info
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex justify-center mb-4">
          <span className="px-3 py-1 bg-gray-200 text-gray-600 dark:text-gray-400 dark:bg-green-800 text-xs rounded-lg uppercase">
            {date}
          </span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"} group`}
          >
            <div
              className={`flex items-center gap-2 max-w-[80%] ${msg.sender === "me" ? "flex-row-reverse" : "flex-row"}`}
            >
              <div
                className={`px-4 py-2 rounded-lg relative ${
                  msg.sender === "me"
                    ? "bg-green-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-900 dark:bg-green-800 dark:text-gray-100 rounded-bl-none"
                }`}
              >
                <span className="text-sm leading-snug wrap-break-words">
                  {msg.text}
                </span>
                <span
                  className={`text-[10px] block text-right mt-1 ${
                    msg.sender === "me"
                      ? "text-green-100"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {msg.time}
                </span>
              </div>

              <div className="relative flex items-center">
                <button
                  onClick={() => toggleTranslateMenu(msg.id)}
                  className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-green-800"
                  title="Translate"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </button>

                {activeMenuId === msg.id && (
                  <div
                    className={`absolute top-8 ${
                      msg.sender === "me" ? "right-0" : "left-0"
                    } bg-white dark:bg-green-800 border border-gray-200 dark:border-green-700 rounded-lg shadow-lg z-30 w-40 py-1`}
                  >
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-green-700 transition-colors"
                      onClick={() => setActiveMenuId(null)}
                    >
                      Translate to Hindi
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-green-700 transition-colors"
                      onClick={() => setActiveMenuId(null)}
                    >
                      Translate to English
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSend}
        className="sticky bottom-0 z-20 flex items-center gap-3 px-4 py-3 border-t border-gray-300 dark:border-green-700 bg-white dark:bg-green-900 mt-auto"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-gray-100 dark:bg-green-800 text-gray-900 dark:text-gray-100 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 transition-all"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="p-2 bg-green-500 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600 transition-colors"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatArea;
