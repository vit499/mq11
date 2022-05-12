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
    <div class="box"> 
    <div class="input-container">
      <input
        type="text" required
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />
    <label>Pass</label>
    </div>
      <button type="submit" className="click_vvod" onClick={onPass}>
      <ion-icon name="key-outline"></ion-icon>
      </button>  
    </div>
  );
};

export default SetComp;
