import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    taskComplete: Palette['primary'];
    taskPending: Palette['primary'];
    iconGreen: Palette['primary'];
    iconBlue: Palette['primary'];
    iconRed: Palette['primary'];
    inputBackground: Palette['primary']
  }
  interface PaletteOptions {
    taskComplete: PaletteOptions['primary'];
    taskPending: PaletteOptions['primary'];
    iconGreen: PaletteOptions['primary'];
    iconBlue: PaletteOptions['primary'];
    iconRed: PaletteOptions['primary'];
    inputBackground: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2F2F2F",
    },
    secondary: {
      main: "#DADADA",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#2F2F2F",
    },
    taskComplete: {
      main: "#53F075"
    },
    taskPending: {
      main: "#F0EB53"
    },
    iconGreen: {
      main: "#50B800"
    },
    iconBlue: {
      main: "#76A1FF"
    },
    iconRed: {
      main: "#FF4949"
    },
    inputBackground: {
      main: "#F4F4F4"
    }
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});