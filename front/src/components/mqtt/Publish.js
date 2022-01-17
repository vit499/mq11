import React, { useState } from "react";
import mq from "../../store/Mq";

const Publish = () => {
  const [mes, setMes] = useState("setout2=10");
  const onMes = (e) => {
    setMes(e.target.value);
  };
  const send = () => {
    mq.mqttPublish({ payload: mes });
  };
  return (
    <div >
      {/* <input value={mq.topicPub} disabled={true} /> */}
      <input class="me-2 strvvod" onChange={onMes} value={mes} />
      <button type="submit" class="btn  btn-primary" onClick={send}>Publish</button>
    </div>
  );
};

export default Publish;
