import { Button, SxProps } from "@mui/material"
import { IComponentWithChildren } from "../../types/component"

interface ICustomButton extends IComponentWithChildren {
  title?: string
  onClick?: () => void
  sx?: SxProps
  hover?: {
    backgroundColor?: string
    color?: string
  }
}

const CustomButton: React.FC<ICustomButton> = ({
  children,
  title,
  onClick,
  sx,
  hover,
}): JSX.Element => {
  return (
    <Button
      onClick={onClick}
      sx={{
        ...sx,
        "&:hover": { ...hover },
      }}
    >
      {children ? children : title}
    </Button>
  )
}

export default CustomButton
