import { ToDoContainer } from "./components/ToDoContainer";
import { AddItemsInputandSubmitButton } from "./components/AddItemsInputandSubmitButton";
import { ToDoList } from "./components/ToDoList";
import { DarkandLightModeToggleButton } from "./components/DarkModeToggleButton";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);
  console.log(`this is the current mode: ${theme}`);
  useEffect(() => {
    //adds "dark" or "light" class to the body of the html document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("light");
    }
  });
  return (
    <div
      className={
        theme === "light" ? "h-screen p-10" : "h-screen p-10 dark:bg-black"
      }
    >
      <DarkandLightModeToggleButton />
      <ToDoContainer>
        {/* AddItemsInput+SubmitButton is the input */}
        <AddItemsInputandSubmitButton />
        {/* ToDoList holds each new todo item */}
        <ToDoList />
      </ToDoContainer>
    </div>
  );
}

export default App;
