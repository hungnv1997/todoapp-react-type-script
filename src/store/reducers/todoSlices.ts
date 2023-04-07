import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../utils/types";

interface Init {
  todos: Array<Todo>;
}
const initialState: Init = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<any>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<any>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<any>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo!.isCompleted = !todo?.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
