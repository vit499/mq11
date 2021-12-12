import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import temperStore from "../../store/TemperStore";
import mq from "../../store/Mq";

const SetOut = observer(() => {
  const [val, setVal] = useState(temperStore.ftout2);
  const onPlus = () => {
    setVal((v) => v + 1);
  };
  const onMinus = () => {
    setVal((v) => v - 1);
  };
  const onSet = () => {
    const mes = `setout2=${val.toString()}`;
    mq.mqttPublish({ payload: mes });
  };
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="mb-2">
          <hr />
          {temperStore.valid && (
            <>
              <div className="mb-2">
                {temperStore.sout2 !== 0 ? (
                  <div style={{ backgroundColor: "pink" }}>Выход 2 включен</div>
                ) : (
                  <div style={{ backgroundColor: "#dddddd" }}>
                    Выход 2 выключен
                  </div>
                )}
              </div>
              <div className="mb-2">{` включение при Т ниже ${temperStore.ftout2} `}</div>
              <div className="mb-2">
                <button className="me-2" onClick={onMinus}>
                  -
                </button>
                {` ${val.toString()}`}
                <button className="ms-2 me-3" onClick={onPlus}>
                  +
                </button>
                <button onClick={onSet}>Установить</button>
              </div>
            </>
          )}
        </div>
        <div>{` Температура=${temperStore.temper} `}</div>
      </div>
    </div>
  );
});

export default SetOut;
