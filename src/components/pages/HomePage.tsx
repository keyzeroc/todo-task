import { Box, Button, List, Typography } from "@mui/material";
import { PrimaryButton } from "../shared/PrimaryButton";
import { useState } from "react";
import { TodoType } from "../../types/Todo";

import Todo from "../todo/Todo";
import {
  sortByDateAscending,
  sortByStatusDescending,
} from "../../utils/helpers";

type SortByType = "Date" | "Status";

type HomePageProps = {
  todos: TodoType[];
};

export default function HomePage({ todos }: HomePageProps) {
  const [sortBy, setSortBy] = useState<SortByType>("Date");

  const sortedTodos =
    sortBy === "Date"
      ? sortByDateAscending(todos)
      : sortByStatusDescending(todos);

      console.log(sortedTodos);
      

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2.5,
            alignItems: "center",
          }}
        >
          <Typography>Sort by:</Typography>
          <PrimaryButton
            sx={{
              paddingRight: 4,
              paddingLeft: 4,
            }}
            variant="contained"
            onClick={() => setSortBy("Date")}
          >
            Date
          </PrimaryButton>
          <Button variant="text" onClick={() => setSortBy("Status")}>
            Status
          </Button>
        </Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          component={"ul"}
        >
          {sortedTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </List>
      </Box>
    </>
  );
}
