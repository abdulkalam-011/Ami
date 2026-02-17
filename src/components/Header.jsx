import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeProvider";
import Search from "./ui/Search";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [language, setLanguage] = useState("en");

  const handleSearch = (searchValue) => {
    console.log("Search term:", searchValue);
  };

  return (
    <>
      <div>
        <div className="w-full h-fit  flex justify-between items-center px-2 ">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">Amy</h1>
          </div>
          <div>
            <select
              name="language"
              className={`${theme} p-2 rounded-2xl`}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div>
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <FaRegMoon className="text-gray-800" />
              ) : (
                <FiSun className="text-yellow-400" />
              )}
            </button>
          </div>
        </div>
        <Search handleSearch={handleSearch} placeholder="CTRL+K to Search " />
      </div>
    </>
  );
};

export default Header;
