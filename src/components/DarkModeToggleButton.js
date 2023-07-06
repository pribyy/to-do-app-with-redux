import { toggleTheme } from "../redux/lightDarkThemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MoonIcon } from "./icons/Moon";
import { SunIcon } from "./icons/Sun";

export const DarkandLightModeToggleButton = () => {
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    console.log("I toggled");
    dispatch(toggleTheme());
  };

  const theme = useSelector((state) => state.theme);
  console.log(`this is the current mode: ${theme}`);

  useEffect(() => {
    // adds "dark" or "light" class to the body of the html document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <div className="flex justify-end">
      <button
        onClick={handleThemeToggle}
        className={
          theme === "light"
            ? "bg-gradient-to-r from-emerald-200 from 10% via-sky-200 to-indigo-200 to-90% text-white font-bold p-1 rounded-lg"
            : "bg-gradient-to-r dark:border-black dark:from-cyan-600 from 10% dark:via-violet-400 dark:to-violet-300 p-1 rounded-lg dark:text-white"
        }
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};
