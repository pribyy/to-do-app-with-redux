export const listOfTasks = [
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

export const mappedTasks = listOfTasks.map((task) => {
  return (
    <div className="flex p-2 mb-px w-50 h-300 border rounded bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%">
      <p>{task.task}</p>
    </div>
  );
});
