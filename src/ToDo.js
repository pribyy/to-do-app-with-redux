import { useState } from "react";

export const ToDoBox = () => {
  //tracking new list item via input & react; variable shared between child components
  const [newListItem, setNewListItem] = useState("");

  //managing state for the entire to do list
  //used for add and delete newListItem
  const [toDoList, setToDoList] = useState([]);

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
      <ListContainer
        newListItem={newListItem}
        toDoList={toDoList}
        setToDoList={setToDoList}
      />
    </div>
  );
};

const AddItemsContainer = (props) => {
  const handleSubmit = () => {
    //if input is not blank...
    if (props.newListItem !== "") {
      //remember previous iteration of the list while adding in to the new list item to the array
      props.setToDoList((prevState) => [
        ...prevState,
        //list item would follow this format:
        { id: Date.now(), task: props.newListItem, completed: false },
      ]);
      //resets input back to blank
      props.setNewListItem("");
    }
  };

  const handleKeyDown = (e) => {
    //keyCode 13 === Enter button
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="relative ">
      <input
        type="text"
        placeholder="Buy apples..."
        className="w-full pt-4 pb-3 px-4 text-lg mb-5 border rounded"
        //props.newListItem is state variable in parent
        value={props.newListItem}
        onKeyDown={handleKeyDown}
        onChange={(e) => props.setNewListItem(e.target.value)}
      />
      <button
        //disable button if blank
        disabled={!props.newListItem}
        tabIndex={0}
        onClick={handleSubmit}
        className={
          //if disabled, button is grey, otherwise, multi-color gradient
          !props.newListItem
            ? `absolute left-100 px-6 py-4 ml-2 mb-5 border rounded bg-sky-100`
            : `absolute px-6 py-4 ml-2 mb-5 border rounded bg-gradient-to-r from-emerald-200 from 10% via-sky-200 to-indigo-200 to-90% cursor-pointer`
        }
      >
        <div>+</div>
      </button>
    </div>
  );
};
const ListContainer = (props) => {
  //tracks which task is clicked to highlight it a darker color and enables the X delete button to be shown
  const [clickedTask, setClickedTask] = useState();

  const handleHighlightClick = (task) => {
    setClickedTask(task);
  };

  const handleDelete = (taskToDelete) => {
    const newTaskItems = props.toDoList.filter(
      (task) => task.id !== taskToDelete.id
    );
    console.log("we are deleting and adding to state", newTaskItems);
    props.setToDoList(newTaskItems);
    /* taskItems.filter((taskItem, index) => {
      console.log(`i clicked delete button for index: ${index}`);
      if (index !== clickedIndex) return taskItem;
    });*/
  };

  const handleKeyDown = (e, task) => {
    //keyCode 46 === Delete button
    console.log(`I pressed delete`);

    /* if (e.key === "Delete" && clickedTask?.id === task.id) {
      handleDelete(task);
    } */
  };

  const taskItemsRendered = props.toDoList.map((task, index) => {
    //index here is position within the rendered mapped list
    console.log(`this is task: ${task}, this is index: ${index}`, task);
    const isClickedTask = clickedTask?.id === task.id;

    return (
      <div
        key={task.id}
        tabIndex={0}
        onKeyDown={(e) => handleKeyDown(e, task)}
        onClick={() => handleHighlightClick(task)}
        className={
          isClickedTask
            ? "hover:cursor-pointer hover:border-3 hover:border-blue-400 active:border-blue-400 active:border-3 flex justify-between text-lg pt-4 pb-3 px-4 mb-px w-50 h-300 border rounded bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90%"
            : "hover:cursor-pointer hover:border-3 hover:border-blue-400 active:border-blue-400 flex justify-between pt-4 pb-3 text-lg px-4 mb-px w-50 h-300 border rounded bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%"
        }
      >
        <p>{task.task}</p>
        {isClickedTask && (
          <div
            onClick={() => handleDelete(task)}
            className="cursor-pointer font-medium text-red-500 text-lg px-2"
          >
            X
          </div>
        )}
      </div>
    );
  });

  return (
    <div>
      <div>{taskItemsRendered}</div>
      <div className="p-2 mb-px w-50 h-300 opacity-50">{props.newListItem}</div>
    </div>
  );
};
