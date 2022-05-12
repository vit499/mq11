import React, { useState } from "react";
import mq from "../../store/Mq";
const Publish = () => {
  const [mes, setMes] = useState("");
  const onMes = (e) => {
    setMes(e.target.value);
    console.log(e.target.value)
  };
  const send = () => {
    mq.mqttPublish({ payload: "setout2=" + String(mes) });
  };
  return (

    <div class="box"> 
        <div class="input-container">
          {/* <input value={mq.topicPub} disabled={true} /> */}
          <input type="text" required onChange={onMes} value={mes} />
          <label>Ввод:</label>
        </div>
        <button type="submit" className="click_vvod" onClick={send}>
        <ion-icon name="paper-plane-outline"></ion-icon>
        </button>
    </div>


  );
};

export default Publish

