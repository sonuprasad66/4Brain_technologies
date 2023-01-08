import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";
import { ReqAuth } from "../HOC/ReqAuth";
import { Camera } from "../Pages/Camera";
import { Otp } from "../Pages/Otp";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ReqAuth>
            <Home />
          </ReqAuth>
        }
      />
      <Route path="/otp" element={<Otp />} />
      <Route
        path="/webcam"
        element={
          // <ReqAuth>
          <Camera />
          // </ReqAuth>
        }
      />
    </Routes>
  );
};
