import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { TodoType } from "../../types/Todo";
import { PrimaryButton } from "../shared/PrimaryButton";
import { MyInput } from "../shared/Input";
import { useRef, useState } from "react";
import { StaticDateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

type EditTodoFormProps = {
  todo: TodoType | null; // IF TODO IS NULL, this means we're in Create Mode, if it's not, then Edit Mode
  onSubmit: (payload: Partial<TodoType>) => void;
};

export default function EditTodoForm({ todo, onSubmit }: EditTodoFormProps) {
  const formRef = useRef<null | HTMLFormElement>(null);
  const [title, setTitle] = useState(todo ? todo.name : "");
  const [description, setDescription] = useState(todo ? todo.description : "");
  const [image, setImage] = useState(todo ? todo.img : "");
  const [todoStatus, setTodoStatus] = useState<number>(todo ? todo.status : 1);
  const [date, setDate] = useState(todo ? dayjs(todo.date * 1000) : dayjs());

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload: Partial<TodoType> = {
      date: date.unix(),
      description: description,
      img: image,
      name: title,
      status: todoStatus,
    };
    onSubmit(payload);
  };

  return (
    <Box
      component={"form"}
      ref={formRef}
      onSubmit={handleForm}
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
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
            flexDirection: "column",
            gap: 1,
          }}
        >
          <MyInput
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            disableUnderline
            type="text"
            name="title"
            placeholder="Title"
            autoComplete="off"
          />
          <MyInput
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            disableUnderline
            type="text"
            name="description"
            placeholder="Description"
            autoComplete="off"
          />
          <MyInput
            value={image}
            onChange={(event) => setImage(event.target.value)}
            disableUnderline
            type="text"
            name="image"
            placeholder="Image"
            autoComplete="off"
          />
        </Box>

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={todoStatus}
            name="radio-buttons-group"
            value={todoStatus}
            onChange={(e) => setTodoStatus(Number.parseInt(e.target.value))}
          >
            <FormControlLabel value={1} control={<Radio />} label="Pending" />
            <FormControlLabel value={0} control={<Radio />} label="Success" />
            <FormControlLabel value={2} control={<Radio />} label="Decline" />
          </RadioGroup>
        </FormControl>
        <StaticDateTimePicker
          value={date}
          onChange={(date) => {
            if (!date) return;
            setDate(date);
          }}
        />
      </Box>

      <Box
        sx={{
          marginLeft: "auto",
          alignSelf: "flex-end",
        }}
      >
        <PrimaryButton
          type="submit"
          sx={{
            padding: "8px 10px 8px 10px",
          }}
          variant="contained"
        >
          {todo ? "Save Changes" : "Add task"}
        </PrimaryButton>
      </Box>
    </Box>
  );
}
