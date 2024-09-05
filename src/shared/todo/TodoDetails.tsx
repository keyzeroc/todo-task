import { Box, Typography } from "@mui/material";
import placeholderImage from "../../assets/placeholder-image.jpg";
import { TodoType } from "../../types/Todo";

type TodoDetailsProps = {
  todo: TodoType;
};

export default function TodoDetails({ todo }: TodoDetailsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: 1,
      }}
    >
      <Typography>{todo.description}</Typography>
      <img
        style={{
          width: "20%",
          marginLeft: "auto",
        }}
        src={!todo.img ? placeholderImage : todo.img}
        alt="task image"
      />
    </Box>
  );
}
