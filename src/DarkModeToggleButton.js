import { toggleTheme } from "./redux/lightDarkThemeSlice";
import { useDispatch, useSelector } from "react-redux";

export const DarkandLightModeToggleButton = () => {
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  const theme = useSelector((state) => state.theme);
  console.log(`this is the current mode: ${theme}`);

  return (
    <div className="flex justify-end">
      <button
        onClick={handleThemeToggle}
        className={
          theme === "light"
            ? "bg-gradient-to-r from-emerald-200 from 10% via-sky-200 to-indigo-200 to-90% text-white font-bold p-1 rounded-lg"
            : "bg-gradient-to-r dark:border-black dark:from-cyan-600 from 10% dark:via-violet-400 dark:to-violet-300 p-1 rounded-lg darK: text-white"
        }
      >
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
