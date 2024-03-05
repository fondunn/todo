import { Box } from "@mui/material"
import { IComponentWithChildren } from "../../types/component"

const ListBody: React.FC<IComponentWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {children}
    </Box>
  )
}

export default ListBody
