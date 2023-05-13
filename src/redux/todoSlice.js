import { createSlice } from "@reduxjs/toolkit";

//slice is a slice of data or group of data
export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, task: "Go to the store", completed: false },
    { id: 2, task: "Workout", completed: false },
    { id: 3, task: "Cook", completed: false },
    { id: 4, task: "Read a book", completed: false },
    { id: 5, task: "Go on a walk", completed: false },
  ],
  //reducers respond to the action by taking name of action + payload
  reducers: {
    //redux passes in current state and action behind the scenes
    addToDo: (state, action) => {
      //new logic to update the state
      const newToDo = {
        id: Date.now(),
        //where does title come from? createSlice creates the action names based on the reducers
        task: action.payload.title,
        completed: false,
      };
      state.push(newToDo);
    },
    deleteToDo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addToDo, deleteToDo } = todoSlice.actions;

export default todoSlice.reducer;
