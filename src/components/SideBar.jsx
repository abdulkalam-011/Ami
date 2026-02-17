import Header from "./Header";

const SideBar = ({ onSelectChat }) => {
  const history = [
    {
      id: 1,
      username: "Alice",
      lastMessage: "Hey, how are you?",
      time: "10:30 AM",
      profile_pic: "",
      created_at: "",
    },
    {
      id: 2,
      username: "Bob",
      lastMessage: "Hey, hows going",
      time: "10:30 AM",
      profile_pic: "",
      created_at: "",
    },
    {
      id: 3,
      username: "Julie",
      lastMessage: "hey! are you coming today ",
      time: "10:30 AM",
      profile_pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPVpWUmO4NnAszmBAvd2pLRpoBfjpx9JhvsA&s",
      created_at: "",
    },
    {
      id: 9,
      username: "Tamannah",
      lastMessage: "hey! are you coming today ",
      time: "10:30 AM",
      profile_pic: "",
      created_at: "",
    },
  ];

  return (
    <>
      <div className="border-r h-screen w-full px-2 pt-2 overflow-y-auto">
        <Header />

        {history.length === 0 ? (
          <div className="text-center mt-10 text-gray-500">
            No conversations yet. Start by searching for something!
          </div>
        ) : (
          <div className="mt-4 space-y-2">
            {history.map((item, index) => (
              <div
                key={index}
                onClick={() => onSelectChat(item)}
                className="p-3 rounded-lg hover:bg-green-500/25 cursor-pointer transition-colors flex items-center gap-4 "
              >
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  {item?.profile_pic ? (
                    <img
                      src={item.profile_pic}
                      alt={item.username}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {item?.username.charAt(0)?.toUpperCase() || "A"}
                    </span>
                  )}
                </div>
                <div>
                  <div className="font-semibold">{item.username}</div>
                  <div className="text-sm text-gray-500 truncate">
                    {item.lastMessage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;
