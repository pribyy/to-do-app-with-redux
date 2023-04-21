import { useState } from "react";

export const ToDoBox = () => {
  //tracking new list item via input
  const [newListItem, setNewListItem] = useState("");

  return (
    <div className="w-1/2 m-auto ">
      <div className="flex justify-center text-3xl my-10">To Do</div>
      <AddItemsContainer
        newListItem={newListItem}
        setNewListItem={setNewListItem}
      />
      <ListContainer newListItem={newListItem} />
    </div>
  );
};

const AddItemsContainer = (props) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buy apples..."
        className="w-full p-2 mb-5 border rounded"
        value={props.newListItem}
        onChange={(e) => props.setNewListItem(e.target.value)}
      ></input>
      <submit className="absolute bottom-4 h-10 px-3 py-2 m-2 border rounded bg-gradient-to-r from-emerald-200 from 10% via-sky-200 to-indigo-200 to-90%">
        +
      </submit>
    </div>
  );
};
const ListContainer = (props) => {
  const listOfTasks = [
    {
      id: 0,
      task: "grocery shopping",
      completed: false,
    },
    { id: 1, task: "gym", completed: false },
    { id: 2, task: "study", completed: false },
    { id: 3, task: "read a book", completed: false },
    { id: 4, task: "water the plants", completed: false },
    { id: 5, task: "cook dinner", completed: false },
  ];

  const mappedTasks = listOfTasks.map((task) => {
    return (
      <div className="flex p-2 mb-px w-50 h-300 border rounded bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%">
        <p>{task.task}</p>
      </div>
    );
  });

  return (
    <div>
      <div>{mappedTasks}</div>
      <div className="p-2 mb-px w-50 h-300 opacity-50">{props.newListItem}</div>
    </div>
  );
};
