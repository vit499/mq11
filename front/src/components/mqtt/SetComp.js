import React, { useState } from "react";
import { useNavigate } from "react-router";
import { SETT_ROUTE } from "../router/constRouter";

const SetComp = () => {
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const onPass = () => {
    if (pass === "333") {
      setPass("");
      navigate(SETT_ROUTE);
    }
  };

  return (
    <div className="mb-2">
      <input
        className="me-2"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
        placeholder="pass"
      />
      <button onClick={onPass}>Settings</button>
    </div>
  );
};

export default SetComp;
