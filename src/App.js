import { ToDoContainer } from "./ToDoContainer";
import { AddItemsInputandSubmitButton } from "./AddItemsInputandSubmitButton";
import { ToDoList } from "./ToDoList";
import { useState } from "react";

function App() {
  //tracking typed characters in the input
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="h-screen p-10">
      <ToDoContainer>
        {/* AddItemsInput+SubmitButton is the input */}
        <AddItemsInputandSubmitButton />
        {/* ToDoList holds each new todo item */}
        <ToDoList inputValue={inputValue} />
      </ToDoContainer>
    </div>
  );
}

export default App;
