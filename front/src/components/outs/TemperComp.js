import { observer } from "mobx-react-lite";
import React from "react";
import temperStore from "../../store/TemperStore";

const TemperComp = observer(() => {
  let tempComent = () =>{
    let str="";
    if (temperStore.temper < 5) str="Очень холодно";
    else if (temperStore.temper < 10) str="Холодно";
    else if(temperStore.temper < 15) str="Прохладно"; 
    else if(temperStore.temper < 20) str="Тепло"; 
    else if(temperStore.temper < 9999) str="Жарко"; 
    else str="--";
    return str;
  }
  return (
    <div className=" down-T">
      <div>
        <ion-icon name="thermometer-outline"></ion-icon>= <span className="text-yellow">{temperStore.temper}°C</span>
      </div>
      <div className="down-line">
      {tempComent()}
      </div>
    
    </div>
  );
});

export default TemperComp;
