import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import MqttComp from "../components/mqtt";
import SettComp from "../components/mqtt/SetComp";
import TemperOuts from "../components/outs";
import mq from "../store/Mq";

const HomePage = observer(() => {
  useEffect(() => {
    // mq.mqttConnect();
    return () => mq.mqttDisconnect();
  }, []);

  return (
    <div className="container">
      <SettComp />

      <MqttComp />
      <TemperOuts />
    </div>
  );
});

export default HomePage;
