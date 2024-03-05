import { useEffect, useState } from "react"
import { ITodo } from "../store/todo/todoSlice"
import { useFilter } from "./useFilter"
import { useTodos } from "./useTodos"

interface FilteredTodosResult {
  filteredTodos: ITodo[]
}

export const useFilteredTodos = (): FilteredTodosResult => {
  const { todos } = useTodos()
  const { filter } = useFilter()

  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>(todos)

  useEffect(() => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo: ITodo) => todo.completed))
        break
      case "current":
        setFilteredTodos(todos.filter((todo: ITodo) => !todo.completed))
        break
      case "all":
      default:
        setFilteredTodos(todos)
        break
    }
  }, [filter, todos])

  return {
    filteredTodos,
  }
}
