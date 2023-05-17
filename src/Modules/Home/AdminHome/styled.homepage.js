import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "#f5f5f5",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    width: "320px",
  },
}));

const Home = styled(Box)(({ theme }) => ({
  border: "1px solid white",
  borderRadius: "100px",
  width: "20%",
  height: "40vh",
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "3em",
  backgroundColor: "#fff",
  color: "black",
}));

export { Container, Home };
