import React from "react";
import { lazy, Suspense, useContext, useState } from "react";
import ThemeContext from "../context/ThemeProvider";
import SideBar from "../components/SideBar";
import ChatAreaSkeleton from "../components/ui/ChatAreaSkeleton";

const ChatArea = lazy(() => import("../components/Chatarea"));

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className={`${theme} min-h-screen w-full flex overflow-hidden`}>
      <div
        className={`w-full md:w-1/4 ${selectedChat ? "hidden md:block" : "block"}`}
      >
        <SideBar onSelectChat={setSelectedChat} />
      </div>

      <div
        className={` ${theme} w-full md:flex-1 bg-gray-50 ${!selectedChat ? "hidden md:block" : "block"}`}
      >
        <Suspense fallback={<ChatAreaSkeleton />}>
          {selectedChat ? (
            <div className="relative h-screen overflow-auto">
              <ChatArea
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
              />
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-green-900 p-6 text-center">
              <div className="relative w-40 h-40 mb-8 flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-green-200 dark:bg-green-800 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute inset-4 bg-green-300 dark:bg-green-700 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>

                <div className="relative z-10 w-24 h-24 bg-white dark:bg-green-600 rounded-full shadow-xl flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300">
                  <svg
                    className="w-12 h-12 text-green-500 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.344a21.98 21.98 0 0 0-1.131-3.513 1.5 1.5 0 0 0-1.424-1.059c-2.456 0-4.9.11-7.31.325a1.5 1.5 0 0 0-1.35 1.14c-.286.974-.52 1.98-.698 3.003M8.25 15.36A21.95 21.95 0 0 1 7.5 12c0-1.136.847-2.1 1.98-2.193.34-.027.68-.052 1.02-.072v-3.09l3 3c1.354 0 2.694.055 4.02.163.305.025.61.054.912.086"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-3 tracking-tight">
                Welcome to Amy
              </h2>
              <p className="text-gray-500 dark:text-gray-300 max-w-sm mb-10 leading-relaxed">
                Select a conversation from the sidebar to view your messages or
                start a new chat.
              </p>

              <div className="flex items-center gap-2 px-5 py-2.5  rounded-full shadow-inner hover:bg-gray-300 dark:hover:bg-green-700 transition-colors cursor-default">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H5V7a3 3 0 015-3 3 3 0 013 3v2h2V7a5 5 0 00-5-5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-200">
                  End-to-end encrypted
                </span>
              </div>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
