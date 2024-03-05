import { Box } from "@mui/material"
import { COLORS } from "../../constants/colors"
import { useTodos } from "../../hooks/useTodos"

const Counter = (): JSX.Element => {
  const { todos } = useTodos()
  const completedTodos = todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 84,
        width: 84,
        background: COLORS.pastel_red,
        borderRadius: "50%",
        fontSize: 18,
        fontWeight: 700,
        color: COLORS.black,
      }}
    >
      {completedTodos}/{totalTodos}
    </Box>
  )
}

export default Counter
