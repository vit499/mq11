/* eslint-disable react-hooks/exhaustive-deps */
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import temperStore from "../../store/TemperStore";
import mq from "../../store/Mq";
import Loading from "./Loading";

const SetOut = observer(() => {
  const [temperOn, setTemperOn] = useState(0);
  const [temperOnInit, setTemperOnInit] = useState(false); //
  const onPlus = () => {
    setTemperOn((v) => v + 1);
  };
  const onMinus = () => {
    setTemperOn((v) => v - 1);
  };
  const onSet = () => {
    const mes = `setout2=${temperOn.toString()}`;
    mq.mqttPublish({ payload: mes });
  };
  useEffect(() => {
    // для начельной инициализации температуры включения
    // console.log("useEff temper valid", temperStore.valid, temperOnInit);
    if (temperStore.valid) {
      if (!temperOnInit) {
        // устанавливается один раз при первом получении данных
        setTemperOn(temperStore.ftout2);
        setTemperOnInit(true);
      }
    }
  }, [temperStore.valid]);
  return (
    <div className="row">
      <div className="">
        <div className="mb-2">
          <hr />
          {mq.connectStatus === "Connected" && !temperStore.valid && (
            <Loading />
          )}
          {temperStore.valid && (
            <>
              <div className="mb-2">
                {temperStore.sout2 !== 0 ? (
                  <div className="vihod-vk">☀☀☀ Выход 2 включен ☀☀☀</div>
                ) : (
                  <div className="vihod-vik">❄❅❆ Выход 2 выключен ❄❅❆</div>
                )}
              </div>
              <div className="mb-2 up-T">
                {" "}
                Включение при Т ниже{" "}
                <span className="text-yellow ">{temperStore.ftout2}</span>
              </div>
              <div className="mb-1 p-2 butter">
                <div>
                  <button
                    type="button"
                    className="but-min ms-2"
                    onClick={onMinus}
                  >
                    -
                  </button>
                  <span className="text-yellow">{temperOn.toString()}</span>
                  <button
                    type="button"
                    className="but-pl ms-2 "
                    onClick={onPlus}
                  >
                    +
                  </button>
                </div>
                <button type="button" className="click " onClick={onSet}>
                  Установить
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default SetOut;
