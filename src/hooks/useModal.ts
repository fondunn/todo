import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { ModalState, closeModal, openModal } from "../store/modal/modalSlice"

interface IUseModal extends ModalState {
  handleOpenModal: () => void
  handleCloseModal: () => void
}

export const useModal = (): IUseModal => {
  const { isOpen } = useSelector((state: RootState) => state.modal)

  const dispatch = useDispatch()

  const handleOpenModal = (): void => {
    dispatch(openModal())
  }
  const handleCloseModal = (): void => {
    dispatch(closeModal())
  }

  return { isOpen, handleOpenModal, handleCloseModal }
}
