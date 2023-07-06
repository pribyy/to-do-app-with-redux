import { useSelector } from "react-redux";
export const ToDoContainer = ({ children }) => {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="w-1/2 m-auto ">
      {/*Title*/}
      <div className="flex justify-center text-3xl my-10 text-black  dark:text-violet-200">
        To Do
      </div>
      {children}
    </div>
  );
};
