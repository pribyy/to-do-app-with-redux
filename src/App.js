import { ToDoBox } from "./ToDo";
import { DarkandLightModeToggleButton } from "./DarkModeToggleButton";
import { useState, useEffect } from "react";

function App() {
  //tracking whether we're in dark or light mode
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen p-10 dark:bg-black">
      <DarkandLightModeToggleButton
        handleThemeToggle={handleThemeToggle}
        theme={theme}
      />
      <ToDoBox />
    </div>
  );
}

export default App;
