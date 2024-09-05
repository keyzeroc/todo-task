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
import EditTodoForm from "./EditTodoForm";
import TodoDetails from "./TodoDetails";
import CloseIcon from "@mui/icons-material/Close";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../features/api/apiSlice";
import { localizeISOString } from "../../utils/helpers";
import TodoMenu from "../menu/TodoMenu";
import TodoArchiveMenu from "../menu/TodoArchiveMenu";

type TodoProps = {
  todo: TodoType;
  isArchive?: boolean;
};

export default function Todo({ todo, isArchive }: TodoProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodoMutation] = useDeleteTodoMutation();

  const handleEditModeSwitch = () => {
    setIsEditMode(true);
    setOpen(true);
  };

  const handleTodoComplete = async () => {
    if (todo.is_done) return;
    const payload: Partial<TodoType> = {
      id: todo.id,
      is_done: true,
    };
    await updateTodo(payload);
  };

  const handleTodoDelete = async () => {
    const payload = {
      id: todo.id,
    };
    await deleteTodoMutation(payload);
  };

  const handleToggleArchive = async () => {
    const payload: Partial<TodoType> = {
      id: todo.id,
      is_archive: !todo.is_archive,
    };
    await updateTodo(payload);
  };

  const handleTodoEdit = async (payload: Partial<TodoType>) => {
    const newPayload: TodoType = {
      ...todo,
      ...payload,
    };
    await updateTodo(newPayload);
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
              {/* {todo.createdAt.substring(11, 19)} */}
              {localizeISOString(todo.createdAt)}
            </Typography>
          </Box>
        </Box>
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
        {!isEditMode && (
          <BasicMenu>
            {!isArchive && (
              <TodoMenu
                onEditModeToggle={handleEditModeSwitch}
                onArchiveSwitch={handleToggleArchive}
                onComplete={handleTodoComplete}
              />
            )}
            {isArchive && (
              <TodoArchiveMenu
                onArchiveSwitch={handleToggleArchive}
                onDelete={handleTodoDelete}
              />
            )}
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
        {isEditMode && <EditTodoForm onSubmit={handleTodoEdit} todo={todo} />}
        {!isEditMode && <TodoDetails todo={todo} />}
      </Collapse>
    </ListItem>
  );
}
