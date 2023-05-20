import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/HomePage";
import UserPage from "..";
import Account from "../Account/Account";
import Profile from "../Profile/Profile";

function HomeRoutes() {
  return (
    <Routes>
      <Route element={<UserPage />}>
        <Route exact path="/" element={<Navigate to="admin" />} />
        <Route path="home" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default HomeRoutes;
