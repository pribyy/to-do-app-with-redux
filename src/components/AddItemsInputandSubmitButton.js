import { useDispatch, useSelector } from "react-redux";
//addToDo is the reducer that gets hooked up to the submit button via dispatch function
import { addToDo } from "../redux/todoSlice";
import { addValuesOnChange, reset } from "../redux/inputValueSlice";

export function AddItemsInputandSubmitButton({ inputValue }) {
  const dispatch = useDispatch();

  const inputValues = useSelector((state) => state.inputValues);
  const theme = useSelector((state) => state.theme);

  const handleSubmit = () => {
    //if there is an inputValue and it is not blank...
    if (inputValues) {
      //dispatch the addToDo action to the store
      //for each action, need to know the title which would be the input value
      dispatch(addToDo({ title: inputValues }));
      dispatch(reset());
    }
  };

  return (
    <div className="relative ">
      <input
        type="text"
        placeholder="Buy apples..."
        className={
          "w-full pt-4 pb-3 px-4 text-lg mb-5 border rounded dark:bg-zinc-800 dark:text-slate-200 dark:border-black"
        }
        value={inputValues}
        onChange={(e) => dispatch(addValuesOnChange(e.target.value))}
      />
      <button
        //disable button if blank
        disabled={!inputValues}
        onClick={handleSubmit}
        className={
          //if disabled, button is grey, otherwise, multi-color gradient
          !inputValue
            ? //disabled color w/ dark mode:
              `absolute left-100 px-6 py-4 ml-2 mb-5 border rounded bg-sky-100 dark:bg-violet-200`
            : //normal button color w/ dark mode:
              `absolute px-6 py-4 ml-2 mb-5 border rounded bg-gradient-to-r from-emerald-200 from 10% via-sky-200 to-indigo-200 to-90% dark:border-black dark:from-cyan-600 from 10% dark:via-violet-400 dark:to-violet-300  cursor-pointer`
        }
      >
        <div>+</div>
      </button>
    </div>
  );
}
