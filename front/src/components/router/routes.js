import { ABOUT_ROUTE, SETT_ROUTE, HOME_ROUTE } from "./constRouter";
import HomePage from "../../pages/HomePage";
import AdminPage from "../../pages/AdminPage";
import AboutPage from "../../pages/AboutPage";

export const authRoutes = [
  {
    path: SETT_ROUTE,
    element: AdminPage,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    element: HomePage,
  },
  {
    path: ABOUT_ROUTE,
    element: AboutPage,
  },
];
