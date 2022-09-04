import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
