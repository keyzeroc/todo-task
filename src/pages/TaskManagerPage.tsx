import { Box } from "@mui/material";

import EditTodoForm from "../shared/todo/EditTodoForm";
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
    await addToDoMutation(newPayload);
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
        <EditTodoForm todo={null} onSubmit={handleTodoAdd} />
      </Box>
    </>
  );
}
