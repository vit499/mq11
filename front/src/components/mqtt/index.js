import React from "react";
import Publish from "./Publish";
import Connection from "./Connection";

const MqttComp = () => {
  return (
    <>
      <Connection />
      <Publish />
    </>
  );
};

export default MqttComp;
