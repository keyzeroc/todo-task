import { DateField } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function DateView() {
  return (
    <DateField
      readOnly
      sx={{
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
  );
}
