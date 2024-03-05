import { useSelector } from "react-redux"
import { RootState } from "../store"
import { TodoFilterType } from "../store/filter/filterSlice"

export const useFilter = (): { filter: TodoFilterType } => {
  const { filter } = useSelector((state: RootState) => state.filter)

  return { filter }
}
