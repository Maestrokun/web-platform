import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { Card } from "./styled.signupform";
import Button from "../../../shared/Button/Button";

const SignUpForm = ({ isSubmitting }) => {
  const backgroundImage = require("../../../assets/Home.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Email: ${email}, Password: ${password}, ConfirmPassword: ${confirmPassword}`
    );
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
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            Welcome Bookworm
          </Typography>
          <Typography sx={{ fontSize: "21px", fontWeight: 600 }}>
            Sign Up (Create an account)
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
            <TextField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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
                fontWeight: 500,
              }}
            >
              {isSubmitting ? (
                <CircularProgress size={25} sx={{ color: "white" }} />
              ) : (
                "Sign Up"
              )}
            </Button>
            <Typography sx={{ fontSize: "14px", mt: "10px" }}>
              Already Registered?,{" "}
              <RouterLink to="/signin" underline="none" color="inherit">
                Sign In
              </RouterLink>
            </Typography>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
