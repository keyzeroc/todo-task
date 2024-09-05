import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export const PrimaryButton = styled(Button, {
  name: "Button", // The component name
})(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: 4,
  paddingBottom: 4,
  borderRadius: 14,
  boxShadow: "none",
  "&:hover": { boxShadow: "none" },
}));
