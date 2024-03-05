import { Box, IconButton, Typography } from "@mui/material"
import { RiDeleteBin7Line } from "react-icons/ri"

import { useDispatch } from "react-redux"
import { COLORS } from "../../constants/colors"
import { deleteTodo, toggleTodoStatus } from "../../store/todo/todoSlice"

interface IListItem {
  record: string
  id: string
  completed: boolean
}

const ListItem: React.FC<IListItem> = ({
  record,
  id,
  completed,
}): JSX.Element => {
  const dispatch = useDispatch()
  const handleToggleStatus = (id: string): void => {
    dispatch(toggleTodoStatus(id))
  }
  const handleDeleteTodo = (id: string): void => {
    dispatch(deleteTodo(id))
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        background: COLORS.grey_dark,
        border: `1px solid ${COLORS.grey}`,
        borderRadius: "8px",
        gap: 2,
      }}
    >
      <Typography
        onClick={() => handleToggleStatus(id)}
        sx={{
          textDecoration: completed
            ? `${COLORS.pastel_red} line-through wavy`
            : "none",
          cursor: "pointer",
          color: completed ? `${COLORS.grey_light}` : COLORS.white,

          fontSize: 18,
        }}
      >
        {record}
      </Typography>

      <IconButton
        onClick={() => handleDeleteTodo(id)}
        sx={{
          p: 0,
          display: "flex",
          width: 24,
          height: 24,
          color: COLORS.pastel_red,
        }}
        aria-label="delete"
      >
        <RiDeleteBin7Line size={24} />
      </IconButton>
    </Box>
  )
}

export default ListItem
