import { Input, styled } from "@mui/material";

export const MyInput = styled(Input, {
  name: "Input", // The component name
})(({ theme }) => ({
  backgroundColor: theme.palette.inputBackground.main,
  padding: 8,
  borderRadius: 16,
}));