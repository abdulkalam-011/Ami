import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../context/ThemeProvider";

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  console.log(theme)

  return (
    <div className='w-full h-fit bg-green-400 flex justify-between items-center'>
      <div><h1>Amy</h1></div>
      <div>
         <button onClick={toggleTheme}>
         { theme === "light" ? <FaRegMoon className="text-gray-800" /> :   <FiSun className="text-yellow-400"/>}
         </button>
         </div>
    </div>
  )
}

export default Header