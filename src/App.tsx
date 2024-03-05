import { Container } from "@mui/material"
import ListBody from "./components/ListBody"
import ListHead from "./components/ListHead"
import ListItem from "./components/ListItem"
import Popup from "./components/Popup"
import { useFilteredTodos } from "./hooks/useFilteredTodos"
import { ITodo } from "./store/todo/todoSlice"

function App(): JSX.Element {
  const { filteredTodos } = useFilteredTodos()

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        paddingTop: 4,
      }}
      maxWidth="sm"
    >
      <ListHead />
      <ListBody>
        {filteredTodos.length > 0 &&
          filteredTodos.map((todo: ITodo, idx: number) => {
            return (
              <ListItem
                key={idx}
                record={todo.record}
                id={todo.id}
                completed={todo.completed}
              />
            )
          })}
      </ListBody>
      <Popup />
    </Container>
  )
}

export default App
