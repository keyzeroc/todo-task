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
import placeholderImage from "../../assets/placeholder-image.jpg";
import BasicMenu from "../../shared/menu/BasicMenu";
import CompleteSVG from "../../shared/svgs/CompleteSVG";
import EditSVG from "../../shared/svgs/EditSVG";
import DeleteSVG from "../../shared/svgs/DeleteSVG";
import EditMode from "./EditMode";
import NormalMode from "./NormalMode";
import CloseIcon from "@mui/icons-material/Close";

type TodoProps = {
  todo: TodoType;
};

export default function Todo({ todo }: TodoProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <ListItem
      sx={{
        display: "flex",
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
          width: 6,
          height: 36,
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          backgroundColor: todo.is_done
            ? "taskPending.main"
            : "taskComplete.main",
        }}
      ></Box>
      <ListItem
        component={"div"}
        key={todo.id}
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
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
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: "bold",
            }}
          >
            {todo.name}
          </Typography>
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
        <Collapse
          sx={{
            width: "100%",
          }}
          in={open}
          timeout="auto"
          unmountOnExit
        >
          {isEditMode && <EditMode todo={todo} />}
          {!isEditMode && <NormalMode todoImage={todo.img} />}
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 1,
            }}
          >
            <Typography>Task Description</Typography>
            <img
              style={{
                width: "20%",
                marginLeft: "auto",
              }}
              src={todo.img === null ? placeholderImage : todo.img}
              alt="task image"
            />
          </Box> */}
        </Collapse>
      </ListItem>
      <Box
        sx={{
          position: "relative",
          top: -3,
        }}
      >
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
              onClick={() => {}}
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
    </ListItem>
  );
}
