import React from "react";
import { Container, Home } from "./styled.homepage";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Grid
        container
        xs={12}
        sx={{
          maxHeight: "1100px",
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          mt: "20px",
        }}
      >
        <Home>Home 1</Home>
        <Home>Home 2</Home>
        <Home>Home 3</Home>
        <Home>Home 4</Home>
      </Grid>
    </Container>
  );
};

export default HomePage;
