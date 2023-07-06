import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  //reducers respond to the action by taking name of action + payload
  reducers: {
    //redux passes in current state and action behind the scenes
    addToDo: (state, action) => {
      const newToDo = {
        id: Date.now(),
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

export const { addToDo, deleteToDo, clickedToDo } = todoSlice.actions;

//todoSlice.reducer is todoReducer in the store
export default todoSlice.reducer;
