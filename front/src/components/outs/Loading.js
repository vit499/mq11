import React from "react";

const Loading = () => {
  return (
    <div className="d-flex align-items-center">
      <h6>Loading...</h6>
      <div
        className="spinner-border spinner-border-sm text-dark ms-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Loading;
