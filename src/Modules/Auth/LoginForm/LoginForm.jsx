import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform//resolvers/yup";
import { CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { Card } from "./styled.loginform";
import Button from "../../../shared/Button/Button";

const LoginForm = () => {
  const backgroundImage = require("../../../assets/Home.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Invalid user info, check your email or password"),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    //    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (data) => {
    // event.preventDefault();
    // console.log(`Email: ${data.email}, Password: ${data.password}`);
    //  console.log('Form data:', data);
    console.log("Email:", data.email);
    console.log("Password:", data.password);
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
            Welcome Back, Sign In
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              //   required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              //   required
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              fullWidth
              disableElevation
              sx={{
                padding: "15px",
                mt: "20px",
                fontSize: "18px",
                fontWeight: 500,
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <CircularProgress size={25} sx={{ color: "white" }} />
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
