import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const ReqAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" replace state={{ data: location.pathname }} />;
  }
  return children;
};
