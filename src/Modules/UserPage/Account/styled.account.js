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

export { Container };
