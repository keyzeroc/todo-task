import { Box, Typography } from "@mui/material";
import placeholderImage from "../../assets/placeholder-image.jpg";

type NormalModeProps = {
  todoImage: null | string;
};

export default function NormalMode({ todoImage }: NormalModeProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: 1,
      }}
    >
      <Typography>Task Description</Typography>
      <img
        style={{
          width: "20%",
          marginLeft: "auto",
        }}
        src={todoImage === null ? placeholderImage : todoImage}
        alt="task image"
      />
    </Box>
  );
}
