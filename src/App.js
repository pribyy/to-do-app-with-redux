import { ToDoBox } from "./ToDo";
import { DarkandLightModeToggleButton } from "./DarkModeToggleButton";
import { useState, useEffect } from "react";

function App() {
  //tracking whether we're in dark or light mode
  /*const [theme, setTheme] = useState("light"); */

  const [theme, setTheme] = useState(() => {
    //get toDoList from localstorage
    const savedTheme = localStorage.getItem("theme");

    //if there is a saved theme color:
    //return parsed JSON object back to a javascript object
    //otherwise, return default "light" mode
    return savedTheme ? JSON.parse(savedTheme) : "light";
  });

  useEffect(() => {
    //adds "dark" or "light" class to the body of the html document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    //stores current state of dark or light in localstorage
    localStorage.setItem("theme", JSON.stringify(theme));
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
