import { useState } from "react";
import { ItemDeleteButton } from "./ItemDeleteButton";

export const ToDoItem = ({ id, task }) => {
  const [clickedToDo, setClickedToDo] = useState(false);

  const handleOnClick = () => {
    setClickedToDo(!clickedToDo);
  };

  return (
    <div
      key={id}
      onClick={handleOnClick}
      className={
        clickedToDo
          ? "hover:cursor-pointer hover:border-3 hover:border-blue-400 active:border-blue-400 active:border-3 flex justify-between text-lg pt-4 pb-3 px-4 mb-px w-50 h-300 border rounded bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90%  dark:border-black dark:from-violet-400 from 10% dark:via-violet-500 dark:to-cyan-600 dark:text-slate-200"
          : "hover:cursor-pointer hover:border-3 hover:border-blue-400 active:border-blue-400 flex justify-between pt-4 pb-3 text-lg px-4 mb-px w-50 h-300 border rounded bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%  dark:border-black dark:from-violet-300 from 10% dark:via-violet-400 dark:to-cyan-600 dark:text-slate-800"
      }
    >
      {task}
      {clickedToDo && <ItemDeleteButton id={id} />}
    </div>
  );
};
