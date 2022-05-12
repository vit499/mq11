import React from "react";
import mq from "../../store/Mq";
import { observer } from "mobx-react-lite";
let flag = 0;
function cklack() {
  if (flag === 0) {
    flag = 1;
    mq.mqTryConnect()
  } else {
    flag = 0;
    mq.mqttDisconnect()
  }
}

const Connection = observer(() => {
  return (
    <div className="mb-2 wrap">
      {/* <div className="button con " onClick={() => cklack()}>
        <div className="span-but">{mq.connectStatus}</div>
      </div> */}
      <label className="label" >
        <input type="checkbox" className="knopka" onClick={() => cklack()}/>
        <div className="icon"><div className="shadow1 shadow1-mini"></div>
          <div className="iconBox"><ion-icon name="cloud-upload-outline"></ion-icon></div>
        </div>

      </label>
      
      {/* {mq.connectStatus === "Connected" && (
        <div className="button discon" onClick={() => mq.mqttDisconnect()}>
          <div className="span-but">Disconnect</div>
        </div>
      )} */}
    </div>
  );
});

export default Connection;
