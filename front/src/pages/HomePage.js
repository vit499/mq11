import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import MqttComp from "../components/mqtt";
import TemperOuts from "../components/outs";
import mq from "../store/Mq";

const HomePage = observer(() => {
  useEffect(() => {
    // mq.mqttConnect();
    return () => mq.mqttDisconnect();
  }, []);

  return (
    <div className="container">
      <MqttComp />
      <TemperOuts />
    </div>
  );
});

export default HomePage;
