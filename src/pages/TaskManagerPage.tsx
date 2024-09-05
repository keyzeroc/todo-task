import { Box } from "@mui/material";

import EditMode from "../shared/todo/EditMode";
import { useAddTodoMutation } from "../features/api/apiSlice";
import { TodoType } from "../types/Todo";
import dayjs from "dayjs";

export default function TaskManagerPage() {
  const [addToDoMutation] = useAddTodoMutation();

  const handleTodoAdd = async (payload: Partial<TodoType>) => {
    const newPayload: Partial<TodoType> = {
      ...payload,
      createdAt: dayjs().toISOString(),
      is_archive: false,
      is_done: false,
    };
    const response = await addToDoMutation(newPayload);
    console.log(response);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <EditMode todo={null} onSubmit={handleTodoAdd} />
      </Box>
    </>
  );
}
