import { ToDoContainer } from "./ToDoContainer";
import { AddItemsInputandSubmitButton } from "./AddItemsInputandSubmitButton";
import { ToDoList } from "./ToDoList";
import { DarkandLightModeToggleButton } from "./DarkModeToggleButton";

function App() {
  return (
    <div className="h-screen p-10">
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
