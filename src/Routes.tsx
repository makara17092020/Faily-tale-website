import React from "react";
import { Routes, Route, } from 'react-router-dom';
import Home from "./pages/home";
import Story from "./pages/story"
import Favorite from "./pages/fav"
import Register from "./pages/register"
import Login from "./pages/login"


const AppRoute: React.FC = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/fav" element={<Favorite/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    )
}

export default AppRoute;