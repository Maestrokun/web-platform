import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../AdminHome/HomePage";
import AdminHome from "..";
import Account from "../Account/Account";
import Profile from "../Profile/Profile";

function HomeRoutes() {
  return (
    <Routes>
      <Route element={<AdminHome />}>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default HomeRoutes;
