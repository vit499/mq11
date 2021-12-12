import React from "react";
import mq from "../../store/Mq";
import { observer } from "mobx-react-lite";

const Connection = observer(() => {
  return (
    <div className="mb-2">
      <button className="me-2" onClick={() => mq.mqTryConnect()}>
        {mq.connectStatus}
      </button>
      {mq.connectStatus === "Connected" && (
        <button onClick={() => mq.mqttDisconnect()}>Disconnect</button>
      )}
    </div>
  );
});

export default Connection;
