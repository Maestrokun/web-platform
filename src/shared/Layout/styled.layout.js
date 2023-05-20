import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Layer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "grid",
  alignItems: "left",
  justifyContent: "left",
  gridTemplateColumns: "auto 1fr",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    width: "320px",
  },
}));

const NavBar = styled(Box)(({ theme }) => ({
  // position: "fixed",
  height: "8vh",
  gridColumn: "1/3",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row",
  color: "#9e9eff",
  // backgroundColor: "#9e9eff",
  backgroundColor: "black",
  // backgroundColor: "#f5f5f5",
  [theme.breakpoints.down("sm")]: {
    width: "320px",
  },
}));

const SideNav = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "280px",
  gridColumn: "1/2",
  justifyContent: "left",

  alignItems: "center",
  backgroundColor: "#9e9eff",
  "& a": {
    display: "flex",
    textDecoration: "none",
    color: "#A7A9BC",
    "& .MuiTypography-body1": {
      padding: "10px 10px",
    },
  },
  "& .active": {
    color: "#FFF !important",
    background: "rgba(248, 247, 250, 0.32)",
    boxShadow: "inset 4px 0px 0px #FFFFFF",
  },
}));

export { Layer, NavBar, SideNav };
