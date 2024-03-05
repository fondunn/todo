import FormControl from "@mui/material/FormControl"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { COLORS } from "../../constants/colors.ts"
import { TodoFilterType, setFilter } from "../../store/filter/filterSlice.ts"

const Filters: React.FC = (): JSX.Element => {
  const [filter, setFilterState] = useState<TodoFilterType>("all")
  const dispatch = useDispatch()

  const handleChange = (event: SelectChangeEvent<TodoFilterType>): void => {
    const newFilter = event.target.value as TodoFilterType
    dispatch(setFilter(newFilter))
    setFilterState(newFilter)
  }

  return (
    <FormControl variant="standard" sx={{ minWidth: 120 }}>
      <Select
        id="filter-select"
        value={filter}
        onChange={handleChange}
        sx={{
          background: COLORS.grey_light,
          borderRadius: "4px",
          color: COLORS.black,
          px: 1,
          "&::after": {
            display: "none",
          },
          "&::before": {
            display: "none",
          },
          "& svg": {
            color: COLORS.black,
          },
          "& div:focus": {
            backgroundColor: "transparent",
          },
        }}
      >
        <MenuItem value={"all"} selected>
          All
        </MenuItem>
        <MenuItem value={"completed"}>Completed</MenuItem>
        <MenuItem value={"current"}>Current</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Filters
