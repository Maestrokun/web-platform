import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Layer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  flexDirection: "column",
  //   backgroundColor: "#f5f5f5",
  //   color: "#fff",
  [theme.breakpoints.down("sm")]: {
    width: "320px",
  },
}));

const NavBar = styled(Box)(({ theme }) => ({
  height: "10vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row",
  color: "#9e9eff",
  backgroundColor: "#f5f5f5",
  [theme.breakpoints.down("sm")]: {
    width: "320px",
  },
}));

const SideNav = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "15%",
  justifyContent: "left",
  alignItems: "center",
  backgroundColor: "#9e9eff",
}));

export { Layer, NavBar, SideNav };
