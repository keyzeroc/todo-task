import { Box, Button, CssBaseline, Typography } from "@mui/material";
import MyDrawerFinal from "./shared/MyDrawerFinal";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { DateField, DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { PrimaryButton } from "./shared/button/PrimaryButton";
import HomePage from "./pages/home/HomePage";
import { useGetTodosQuery } from "./features/api/apiSlice";
import ArchivePage from "./pages/archive/ArchivePage";
import TaskManagerPage from "./pages/taskmanager/TaskManagerPage";
import DateView from "./shared/date/DateView";

// export type Pages = "Home" | "Archive" | "Task Manager";
export enum Pages {
  "Home" = "Home" as any,
  "Archive" = "Archive" as any,
  "Task Manager" = "Task Manager" as any,
}
type SortByType = "Date" | "Status";

function App() {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);
  const [sortBy, setSortBy] = useState<SortByType>("Date");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { data, isLoading, error } = useGetTodosQuery();

  // console.log(data);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        // gap: 2.5,
        // justifyContent: "center",
        // alignItems: "center",
        background: "#background",
      }}
    >
      {/* <CssBaseline /> */}
      <MyDrawerFinal selectedPage={currentPage} onPageChange={setCurrentPage} />
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
          <Box
            sx={{
              alignSelf: "center",
            }}
          >
            <DateView />
          </Box>
        )}

        {currentPage === Pages.Home && data && <HomePage todos={data} />}
        {currentPage === Pages.Archive && data && <ArchivePage />}
        {currentPage === Pages["Task Manager"] && <TaskManagerPage />}

        {/* <DateTimePicker views={["year", "month", "day"]} /> */}
      </Box>
    </Box>
  );
}

export default App;
