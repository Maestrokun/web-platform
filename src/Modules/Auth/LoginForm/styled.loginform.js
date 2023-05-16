import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Card = styled(Box)(({ theme }) => ({
  width: "60%",
  display: "flex",
  padding: "5em 3em",
  borderRadius: "15px",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "10em",
  marginRight: "20em",
  flexDirection: "column",
  backgroundColor: "#cfe2ff",
  [theme.breakpoints.down("sm")]: {
    width: "320px",
  },
}));

export { Card };
