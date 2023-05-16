import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Card } from "./styled.loginform";

const LoginForm = () => {
  const backgroundImage = require("../../../assets/Home.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <Grid
      sx={{
        alignContent: "center",
        alignItems: "center",
        justifyContent: "flex-end",
        display: "flex",
        flexDirection: "row",
      }}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Grid item xs={5}>
        <Card>
          <Typography sx={{ fontSize: "21px", fontWeight: 600 }}>
            Welcome, Sign In
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                padding: "15px",
                mt: "20px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Sign In
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
