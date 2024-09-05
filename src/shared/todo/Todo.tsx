import {
  Box,
  Collapse,
  IconButton,
  ListItem,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { TodoType } from "../../types/Todo";
import BasicMenu from "../menu/BasicMenu";
import CompleteSVG from "../svgs/CompleteSVG";
import EditSVG from "../svgs/EditSVG";
import DeleteSVG from "../svgs/DeleteSVG";
import EditMode from "./EditMode";
import NormalMode from "./NormalMode";
import CloseIcon from "@mui/icons-material/Close";
import { useUpdateTodoMutation } from "../../features/api/apiSlice";

type TodoProps = {
  todo: TodoType;
};

export default function Todo({ todo }: TodoProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updateTodo] = useUpdateTodoMutation();

  const handleTodoComplete = async () => {
    if (todo.is_done) return;
    const payload: Partial<TodoType> = {
      id: todo.id,
      is_done: true,
    };
    const res = await updateTodo(payload);
    console.log(res);
  };

  const handleTodoEdit = async (payload: Partial<TodoType>) => {
    const newPayload: TodoType = {
      ...todo,
      ...payload,
    };
    const response = await updateTodo(newPayload);
    console.log(response);
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "secondary.main",
        borderRadius: 2,
        padding: 0,
        paddingTop: 1,
        paddingBottom: 1,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          padding: 0,
          gap: 1,
        }}
      >
        <Box
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          {/* COLORED INDICATOR */}
          <Box
            sx={{
              width: 6,
              height: 36,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              backgroundColor: todo.is_done
                ? "taskComplete.main"
                : "taskPending.main",
            }}
          ></Box>
          {/* TODO NAME */}
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: "bold",
            }}
          >
            {todo.name}
          </Typography>
          {/* DATE CREATED */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <Typography
              sx={{
                marginLeft: "auto",
                fontWeight: "bold",
              }}
            >
              {todo.createdAt.substring(11, 19)}
            </Typography>
          </Box>
        </Box>
        {/* CLOSE BUTTON IF IN EDIT MODE */}
        {isEditMode && (
          <IconButton
            onClick={() => {
              setIsEditMode(false);
              setOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
        {/* BUTTON TO OPEN MENU */}
        {!isEditMode && (
          <BasicMenu>
            <MenuItem
              sx={{
                padding: 0.5,
              }}
              onClick={() => {
                setIsEditMode(true);
                setOpen(true);
              }}
            >
              <EditSVG size={14} />
            </MenuItem>
            <MenuItem
              sx={{
                padding: 0.5,
              }}
              onClick={handleTodoComplete}
            >
              <CompleteSVG size={14} />
            </MenuItem>
            <MenuItem
              sx={{
                padding: 0.5,
              }}
              onClick={() => {}}
            >
              <DeleteSVG size={14} />
            </MenuItem>
          </BasicMenu>
        )}
      </Box>
      {/* MORE TASK COLLAPSABLE CONTENT  */}
      <Collapse
        sx={{
          width: "100%",
          padding: 1,
          paddingTop: 0,
        }}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        {isEditMode && <EditMode onSubmit={handleTodoEdit} todo={todo} />}
        {!isEditMode && <NormalMode todo={todo} />}
      </Collapse>
    </ListItem>
  );
}
