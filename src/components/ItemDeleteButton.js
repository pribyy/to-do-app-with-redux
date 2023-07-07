import { useDispatch } from "react-redux";
import { deleteToDo } from "../redux/todoSlice";

export const ItemDeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    //passing in id as payload
    dispatch(deleteToDo({ id: id }));
  };

  return (
    <div
      onClick={handleDelete}
      className="cursor-pointer font-medium text-red-500 dark:text-slate-200 text-lg px-2"
    >
      X
    </div>
  );
};
