import { ToDoItem } from "./ToDoItem";
import { useSelector } from "react-redux";

export function ToDoList(props) {
  //useSelector hook allows you to hook up your data from redux slice to your component and use it
  //the state value that gets passed into the function is the entire state tree in redux
  const todos = useSelector((state) => state.todos);

  const mappedDummyToDos = todos.map((todo) => {
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
