import { useSelector } from "react-redux"
import { RootState } from "../store"
import { TodoState } from "../store/todo/todoSlice"

export const useTodos = (): TodoState => {
  const { todos } = useSelector((state: RootState) => state.todo)

  return { todos }
}
