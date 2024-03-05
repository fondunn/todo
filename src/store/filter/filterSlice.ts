import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

const initialState: FilterState = {
  filter: "all",
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<TodoFilterType>) => {
      state.filter = action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer

export type TodoFilterType = "all" | "completed" | "current"

export interface FilterState {
  filter: TodoFilterType
}
