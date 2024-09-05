import { Box, Typography } from "@mui/material";
import MiniDrawer from "./shared/MiniDrawer";
import { useState } from "react";
import { DateField } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import HomePage from "./pages/HomePage";
import { useGetTodosQuery } from "../features/api/apiSlice";
import ArchivePage from "./pages/ArchivePage";
import TaskManagerPage from "./pages/TaskManagerPage";

import { Pages } from "../types/Pages";

function App() {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);

  const { data, isLoading, error } = useGetTodosQuery();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        background: "#background",
      }}
    >
      {/* <CssBaseline /> */}
      <MiniDrawer selectedPage={currentPage} onPageChange={setCurrentPage} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          paddingTop: 12,
          paddingRight: 4,
          paddingLeft: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: 78,
          }}
        >
          ToDo List
        </Typography>
        {currentPage && currentPage !== Pages["Task Manager"] && (
          <DateField
            readOnly
            sx={{
              alignSelf: "center",
              outline: "none",
              pointerEvents: "none",
              borderRadius: 4,
              backgroundColor: "inputBackground.main",
              width: "fit-content",
              ".MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                  outline: "none",
                },
            }}
            defaultValue={dayjs()}
            format="YYYY-MM-DD"
          />
        )}
        {!isLoading && error && (
          <Typography
            sx={{
              alignSelf: "center",
            }}
          >
            Could not load tasks: {error as string}
          </Typography>
        )}
        {isLoading && (
          <Typography
            sx={{
              alignSelf: "center",
            }}
          >
            Loading todos...
          </Typography>
        )}
        {currentPage === Pages.Home && data && (
          <HomePage todos={data.filter((todo) => !todo.is_archive)} />
        )}
        {currentPage === Pages.Archive && data && (
          <ArchivePage todos={data.filter((todo) => todo.is_archive)} />
        )}
        {currentPage === Pages["Task Manager"] && <TaskManagerPage />}
      </Box>
    </Box>
  );
}

export default App;
