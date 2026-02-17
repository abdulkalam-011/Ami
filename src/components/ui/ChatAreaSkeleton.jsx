const ChatAreaSkeleton = () => {
  return (
    <div className="flex flex-col h-screen w-full relative bg-white dark:bg-green-900">

      <div className="sticky top-0 z-20 flex items-center gap-4 px-4 py-3 border-b border-gray-300 dark:border-green-700 bg-white dark:bg-green-900">

        <div className="md:hidden w-6 h-6 bg-gray-300 dark:bg-green-700 rounded animate-pulse"></div>
        

        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-green-700 animate-pulse"></div>

        <div className="flex flex-col gap-2">
          <div className="w-32 h-4 bg-gray-300 dark:bg-green-700 rounded animate-pulse"></div>
          <div className="w-24 h-3 bg-gray-300 dark:bg-green-700 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-6 overflow-hidden">

        <div className="flex justify-center mb-6">
          <div className="w-24 h-6 bg-gray-300 dark:bg-green-800 rounded-lg animate-pulse"></div>
        </div>

        <div className="flex justify-start">
          <div className="w-2/3 md:w-1/3 h-12 bg-gray-200 dark:bg-green-800 rounded-lg rounded-bl-none animate-pulse"></div>
        </div>

        <div className="flex justify-end">
          <div className="w-1/2 md:w-1/4 h-16 bg-gray-300 dark:bg-green-700 rounded-lg rounded-br-none animate-pulse"></div>
        </div>

        <div className="flex justify-end">
          <div className="w-3/4 md:w-1/3 h-10 bg-gray-300 dark:bg-green-700 rounded-lg rounded-br-none animate-pulse"></div>
        </div>

        <div className="flex justify-start">
          <div className="w-1/2 md:w-1/4 h-20 bg-gray-200 dark:bg-green-800 rounded-lg rounded-bl-none animate-pulse"></div>
        </div>
      </div>

 
      <div className="sticky bottom-0 z-20 flex items-center gap-3 px-4 py-3 border-t border-gray-300 dark:border-green-700 bg-white dark:bg-green-900 mt-auto">

        <div className="flex-1 h-10 bg-gray-200 dark:bg-green-800 rounded-full animate-pulse"></div>
 
        <div className="w-10 h-10 bg-gray-300 dark:bg-green-700 rounded-full animate-pulse shrink-0"></div>
      </div>

    </div>
  );
};

export default ChatAreaSkeleton;