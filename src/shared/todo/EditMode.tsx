import {
  Box,
  FormControl,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import { TodoType } from "../../types/Todo";
import { PrimaryButton } from "../button/PrimaryButton";
import { DateTimePicker } from "@mui/x-date-pickers";

type EditModeProps = { todo: TodoType };

enum TodoStatuses {
  "Success",
  "Pending",
  "Decline",
}

export default function EditMode({ todo }: EditModeProps) {
  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);
  };
  return (
    <Box
      onSubmit={handleForm}
      component={"form"}
      sx={{
        display: "flex",
        // justifyContent: "flex-start",
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Input type="text" name="title" placeholder="Title" />
          <Input type="text" name="description" placeholder="Description" />
          <Input type="text" name="image" placeholder="Image" />
        </Box>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={todo.status}
            name="radio-buttons-group"
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <FormControlLabel
              value={TodoStatuses.Pending}
              control={<Radio />}
              label="Pending"
            />
            <FormControlLabel
              value={TodoStatuses.Success}
              control={<Radio />}
              label="Success"
            />
            <FormControlLabel
              value={TodoStatuses.Decline}
              control={<Radio />}
              label="Decline"
            />
          </RadioGroup>
        </FormControl>
        <DateTimePicker name="date" views={["year", "month", "day"]} />
      </Box>
      <Box
        sx={{
          marginLeft: "auto",
          alignSelf: "flex-end",
        }}
      >
        <PrimaryButton>Save Changes</PrimaryButton>
      </Box>
    </Box>
  );
}
