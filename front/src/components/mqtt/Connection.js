import React from "react";
import mq from "../../store/Mq";
import { observer } from "mobx-react-lite";

const Connection = observer(() => {
  return (
    <div className="mb-2 wrap">
      <div  class="button con " onClick={() => mq.mqTryConnect()}>
        <div class="span-but">{mq.connectStatus}</div>
      </div>
      {mq.connectStatus === "Connected" && (
        <div  class="button discon" onClick={() =>
           mq.mqttDisconnect()}><div class="span-but">Disconnect</div></div>
      )}
    </div>
  );
});

export default Connection;
