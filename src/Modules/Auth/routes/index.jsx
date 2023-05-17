import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";

function AuthRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/signin" element={<LoginForm />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default AuthRouter;
