import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import AdminPage from "../../pages/AdminPage";
import HomePage from "../../pages/HomePage";
import { ABOUT_ROUTE, HOME_ROUTE, SETT_ROUTE } from "./constRouter";

const AppRouter = () => {
  // const { userStore } = useContext(Context);
  // console.log("userStore", userStore);
  const userStore = { isAuth: true };
  return (
    <Routes>
      {userStore.isAuth && <Route path={SETT_ROUTE} element={<AdminPage />} />}
      <Route path={HOME_ROUTE} element={<HomePage />} />
      <Route path={ABOUT_ROUTE} element={<AboutPage />} />
      <Route path="*" element={<Navigate to={<HomePage />} />} />
    </Routes>
  );
};

export default AppRouter;
