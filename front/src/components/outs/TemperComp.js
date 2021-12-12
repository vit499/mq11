import { observer } from "mobx-react-lite";
import React from "react";
import temperStore from "../../store/TemperStore";

const TemperComp = observer(() => {
  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-2">
          {` temper=${temperStore.temper} out=${temperStore.sout2}`}
          {` ftout=${temperStore.ftout1} `}
        </div>
      </div>
    </div>
  );
});

export default TemperComp;
