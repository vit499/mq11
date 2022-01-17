import React from "react";
import { Link } from "react-router-dom";
import { ABOUT_ROUTE, HOME_ROUTE } from "./constRouter";

const TopBar = () => {
  return (
    <div className="werh mb-3 ">
      <Link className=" werhk me-4" to={HOME_ROUTE}>
        Home
      </Link>
      <Link className=" werhk" to={ABOUT_ROUTE}>
        About
      </Link>
    </div>
  );
};

export default TopBar;
