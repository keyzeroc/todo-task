import { Box } from "@mui/material";

import EditTodoForm from "../todo/EditTodoForm";
import { useAddTodoMutation } from "../../features/api/apiSlice";
import { TodoType } from "../../types/Todo";
import dayjs from "dayjs";

type TaskManagerPage = {
  onTaskCreate: () => void;
};

export default function TaskManagerPage({onTaskCreate}: TaskManagerPage) {
  const [addToDoMutation] = useAddTodoMutation();

  const handleTodoAdd = async (payload: Partial<TodoType>) => {
    const newPayload: Partial<TodoType> = {
      ...payload,
      createdAt: dayjs().toISOString(),
      is_archive: false,
      is_done: false,
    };
    await addToDoMutation(newPayload);
    onTaskCreate();
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
