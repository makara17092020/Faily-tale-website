import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Story from "./pages/story";
import Favorite from "./pages/fav";
import Register from "./pages/register";
import Login from "./pages/login";
import Detail from "./pages/detail";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
      <Route path="/fav" element={<Favorite />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default AppRoute;
