import { Box, List, Typography } from "@mui/material";
import { TodoType } from "../types/Todo";
import Todo from "../shared/todo/Todo";

type ArchivePageProps = {
  todos: TodoType[];
};

export default function ArchivePage({ todos }: ArchivePageProps) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {todos && todos.length > 0 && (
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            component={"ul"}
          >
            {todos.map((todo) => (
              <Todo isArchive={true} key={todo.id} todo={todo} />
            ))}
          </List>
        )}
        {todos && todos.length === 0 && (
          <Typography sx={{ textAlign: "center" }} variant="h6">
            No Archived ToDos yet
          </Typography>
        )}
      </Box>
    </>
  );
}
