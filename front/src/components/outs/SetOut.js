/* eslint-disable react-hooks/exhaustive-deps */
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import temperStore from "../../store/TemperStore";
import mq from "../../store/Mq";
import Loading from "./Loading";
import Publish from "../mqtt/Publish";
import TemperComp from "./TemperComp";

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
    <div className="">
      <div className="">
        <div className="mb-2">

          {mq.connectStatus === "Connected" && !temperStore.valid && (
            <Loading />
          )}
          {temperStore.valid && (
            <>
              <hr />
              <div className="mb-2">
                {temperStore.sout2 !== 0 ? (
                  <div className="vihod"><span className="marg down-line"><ion-icon name="snow-outline"></ion-icon></span><span className="vihod-vk2 down-line"><ion-icon name="sunny-outline"></ion-icon></span></div>
                ) : (
                  <div className="vihod"><span className="vihod-vk1 down-line"><ion-icon name="snow-outline"></ion-icon></span><span className="marg down-line"><ion-icon name="sunny-outline"></ion-icon></span></div>
                )}
              </div>
              <div className="mb-2 up-T up-T-mini">
                {" "}
                Включение при <ion-icon id="qwe" name="thermometer-outline"></ion-icon> ниже{" "}
                <span className="text-yellow ">{temperStore.ftout2}</span>°C
              </div>
              {/* --pult-- */}
              <div className="pult">
                <Publish />
                
                <div className="mb-1 p-2 butter">

                  <div className="l1">
                    <button
                      type="button"
                      className="but-min"
                      onClick={onMinus}
                    >
                      <ion-icon name="remove-circle-outline"></ion-icon>
                    </button>
                    <span className="text-yellow">{temperOn.toString()}</span>
                    <button
                      type="button"
                      className="but-pl"
                      onClick={onPlus}
                    >
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                  </div>
                  <button type="button" className="click " onClick={onSet}>
                    Установить
                  </button>
                </div>
                <TemperComp />
                {/* <select className="select-T">
                  <option>0</option>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                </select> */}
              </div>
              {/* --pult-- */}
              
            </>
          )}

        </div>
      </div>
    </div>
  );
});

export default SetOut;
