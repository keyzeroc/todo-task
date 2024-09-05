import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Pages } from "../App";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

type MiniDrawerProps = {
  selectedPage: Pages;
  onPageChange: (newPage: Pages) => void;
};

export default function MiniDrawer({
  onPageChange,
  selectedPage,
}: MiniDrawerProps) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={handleDrawerToggle}
          >
            {!open ? <MenuIcon /> : <CloseIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {Object.keys(Pages).map((pageName) => (
            <ListItem key={pageName} disablePadding sx={{ display: "flex" }}>
              <ListItemButton
                onClick={() =>
                  onPageChange(Pages[pageName as keyof typeof Pages])
                }
                sx={[
                  {
                    display: "flex",
                    justifyContent: "center",
                    minHeight: 48,
                    px: 2.5,
                  },
                  !open
                    ? {
                        visibility: "none",
                        display: "none",
                      }
                    : {
                        visibility: "visible",
                        display: "flex",
                      },
                ]}
              >
                <Typography
                  sx={{
                    color:
                      selectedPage.toString() === pageName
                        ? "secondary.main"
                        : "primary.main",
                  }}
                >
                  {pageName}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
