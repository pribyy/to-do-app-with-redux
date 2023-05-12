export const ToDoContainer = ({ children }) => {
  return (
    <div className="w-1/2 m-auto ">
      {/*Title*/}
      <div className="flex justify-center text-3xl my-10 dark:text-violet-200">
        To Do
      </div>
      {children}
    </div>
  );
};
