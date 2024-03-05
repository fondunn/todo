import { Box } from "@mui/material"
import { FaPlus } from "react-icons/fa"
import { COLORS } from "../../constants/colors"
import { useModal } from "../../hooks/useModal"
import Counter from "../Counter"
import CustomButton from "../CustomButton"
import TodoFilters from "../Filters"

const ListHead = (): JSX.Element => {
  const { handleOpenModal } = useModal()
  return (
    <Box
      sx={{
        position: "sticky",
        top: 10,
        zIndex: 4,
        background: COLORS.black,
      }}
    >
      <Box
        sx={{
          py: 1,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: COLORS.black,
          borderRadius: "8px",

          border: `1px solid ${COLORS.grey}`,
        }}
      >
        <h1>ToDo List</h1>
        <Counter />
      </Box>
      <Box
        sx={{
          pt: 2,
          pb: 1,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TodoFilters />
        <Box
          sx={{
            width: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomButton
            title="New"
            onClick={handleOpenModal}
            sx={{
              display: "flex",
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: COLORS.pastel_red,
              color: COLORS.black,
              minWidth: 40,
            }}
            hover={{
              backgroundColor: COLORS.pastel_red_750,
              color: COLORS.white,
            }}
          >
            <FaPlus />
          </CustomButton>
        </Box>
      </Box>
    </Box>
  )
}

export default ListHead
