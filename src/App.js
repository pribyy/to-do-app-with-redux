import { ToDoContainer } from "./ToDoContainer";
import { AddItemsInputandSubmitButton } from "./AddItemsInputandSubmitButton";
import { ToDoList } from "./ToDoList";
import { useState } from "react";

function App() {
  //tracking typed characters in the input
  const [newListItem, setNewListItem] = useState("");
  return (
    <div className="h-screen p-10">
      <ToDoContainer>
        {/* AddItemsContainer is the input */}
        <AddItemsInputandSubmitButton
          newListItem={newListItem}
          setNewListItem={setNewListItem}
        />
        {/* ListContainer holds each new todo item */}
        <ToDoList newListItem={newListItem} />
      </ToDoContainer>
    </div>
  );
}

export default App;
