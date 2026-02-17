import "./App.css";

import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setisAuthenticated(true);
  };

  return (
    <>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <AuthPage onAuthSuccess={handleAuthSuccess} />
      )}
    </>
  );
};

export default App;
