import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: ITodo = {
        id: uuidv4(),
        record: action.payload,
        completed: false,
      }
      state.todos = [newTodo, ...state.todos]
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleTodoStatus: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    },
  },
})

export const { addTodo, deleteTodo, toggleTodoStatus } = todoSlice.actions

export default todoSlice.reducer

export interface ITodo {
  id: string
  record: string
  completed: boolean
}

export interface TodoState {
  todos: [] | ITodo[]
}
