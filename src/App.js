import { ToDoBox } from "./ToDo";
import { DarkandLightModeToggle } from "./DarkModeToggle";
import { useState, useEffect } from "react";

function App() {
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
      <DarkandLightModeToggle
        handleThemeToggle={handleThemeToggle}
        theme={theme}
      />
      <ToDoBox />
    </div>
  );
}

export default App;
