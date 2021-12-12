import React from "react";
import { Link } from "react-router-dom";
import { ABOUT_ROUTE, HOME_ROUTE } from "./constRouter";

const TopBar = () => {
  return (
    <div className="container mb-3">
      <Link className="me-2" to={HOME_ROUTE}>
        Home
      </Link>
      <Link className="me-2" to={ABOUT_ROUTE}>
        About
      </Link>
    </div>
  );
};

export default TopBar;
