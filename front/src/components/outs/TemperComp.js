import { observer } from "mobx-react-lite";
import React from "react";
import temperStore from "../../store/TemperStore";

const TemperComp = observer(() => {
  return (
    <div className=" down-T">
      Температура= <span className="text-yellow">{temperStore.temper}</span>
    </div>
  );
});

export default TemperComp;
