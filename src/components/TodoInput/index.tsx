import { Box, Button, TextField, Typography } from "@mui/material"
import { ChangeEvent, useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { useModal } from "../../hooks/useModal"
import { addTodo } from "../../store/todo/todoSlice"

const TodoInput: React.FC = (): JSX.Element => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()
  const { handleCloseModal } = useModal()
  const limit = import.meta.env.VITE_TASK_LENGTH_LIMIT || 50

  const handleInputValue = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const inputValue = e.target.value
      if (inputValue.length <= limit) {
        setValue(inputValue)
      } else {
        setValue(inputValue.slice(0, limit))
      }
    },
    []
  )

  const handleSaveTodo = (): void => {
    if (value.trim() !== "") {
      dispatch(addTodo(value))
      setValue("")
      handleCloseModal()
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField multiline rows={4} value={value} onChange={handleInputValue} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>
          {value.length} / {limit}
        </Typography>
        <Button onClick={handleSaveTodo}>Save</Button>
      </Box>
    </Box>
  )
}

export default TodoInput
