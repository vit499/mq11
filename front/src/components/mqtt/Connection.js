import React from "react";
import mq from "../../store/Mq";
import { observer } from "mobx-react-lite";

const Connection = observer(() => {
  return (
    <div className="mb-2 wrap">
      <div className="button con " onClick={() => mq.mqTryConnect()}>
        <div className="span-but">{mq.connectStatus}</div>
      </div>
      {mq.connectStatus === "Connected" && (
        <div className="button discon" onClick={() => mq.mqttDisconnect()}>
          <div className="span-but">Disconnect</div>
        </div>
      )}
    </div>
  );
});

export default Connection;
