import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import { useModal } from "../../hooks/useModal"
import TodoInput from "../TodoInput"

const Popup: React.FC = (): JSX.Element => {
  const { isOpen, handleCloseModal } = useModal()

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            maxWidth: "93%",
            bgcolor: "background.paper",
            p: 4,
            color: "black",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New task
          </Typography>
          <TodoInput />
        </Box>
      </Modal>
    </div>
  )
}

export default Popup
