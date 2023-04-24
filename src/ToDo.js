import { useState } from "react";
import { listOfTasks } from "./listoftasks";

export const ToDoBox = () => {
  //tracking new list item via input & react; variable shared between child components
  const [newListItem, setNewListItem] = useState("");

  //managing state for the entire list (adding newListItem to toDoList onclick)
  const [toDoList, setToDoList] = useState(listOfTasks);

  console.log(`this is mapped tasks or toDoList variable: ${toDoList}`);

  return (
    <div className="w-1/2 m-auto ">
      <div className="flex justify-center text-3xl my-10">To Do</div>
      <AddItemsContainer
        newListItem={newListItem}
        setNewListItem={setNewListItem}
        toDoList={toDoList}
        setToDoList={setToDoList}
      />
      <ListContainer newListItem={newListItem} toDoList={toDoList} />
    </div>
  );
};

const AddItemsContainer = (props) => {
  const handleButtonClick = () => {
    if (props.newListItem !== "") {
      props.setToDoList((prevState) => [
        ...prevState,
        { id: Date.now(), task: props.newListItem, completed: false },
      ]);

      props.setNewListItem("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleButtonClick();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buy apples..."
        className="w-full p-2 mb-5 border rounded"
        value={props.newListItem}
        onKeyDown={handleKeyDown}
        onChange={(e) => props.setNewListItem(e.target.value)}
      ></input>
      <submit
        disabled={!props.newListItem}
        onClick={handleButtonClick}
        className={
          !props.newListItem
            ? `absolute bottom-4 h-10 px-3 py-2 m-2 border rounded bg-sky-100`
            : `absolute bottom-4 h-10 px-3 py-2 m-2 border rounded bg-gradient-to-r from-emerald-200 from 10% via-sky-200 to-indigo-200 to-90%`
        }
      >
        +
      </submit>
    </div>
  );
};
const ListContainer = (props) => {
  const taskItems = props.toDoList.map((task) => {
    return (
      <div className="flex p-2 mb-px w-50 h-300 border rounded bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%">
        <p>{task.task}</p>
      </div>
    );
  });

  return (
    <div>
      <div>{taskItems}</div>
      <div className="p-2 mb-px w-50 h-300 opacity-50">{props.newListItem}</div>
    </div>
  );
};
