import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ThemeContext from "./context/ThemeProvider";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${theme} min-h-screen w-full flex`}>
        <SideBar />
        <div>App</div>
      </div>
    </>
  );
};

export default App;
