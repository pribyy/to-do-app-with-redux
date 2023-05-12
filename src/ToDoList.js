import { ToDoItem } from "./ToDoItem";

export function ToDoList(props) {
  const dummyToDos = [
    { id: 1, task: "Go to the store", completed: false },
    { id: 2, task: "Workout", completed: false },
    { id: 3, task: "Cook", completed: false },
    { id: 4, task: "Read a book", completed: false },
    { id: 5, task: "Go on a walk", completed: false },
  ];

  const mappedDummyToDos = dummyToDos.map((todo) => {
    return (
      <div>
        <ToDoItem task={todo.task} id={todo.id} />
      </div>
    );
  });

  return (
    <div>
      {mappedDummyToDos}
      {/*writes each character of the list item*/}
      <div className="p-2 mb-px w-50 h-300 opacity-50">{props.newListItem}</div>
    </div>
  );
}
