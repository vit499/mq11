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
      <div className="">
        <div className="mb-2">
          <hr />
          {temperStore.valid && (
            <>
              <div className="mb-2">
                {temperStore.sout2 !== 0 ? (
                  <div  class="vihod-vk">☀☀☀ Выход 2 включен ☀☀☀</div>
                ) : (
                  <div  class="vihod-vik">
                   ❄❅❆ Выход 2 выключен ❄❅❆ 
                  </div>
                )}
              </div>
              <div className="mb-2 up-T"> Включение при Т ниже <span class="text-yellow ">{temperStore.ftout2}</span></div>
              <div className="mb-1 p-2 butter">
                <div>
                  <button type="button" class="but-min ms-2" onClick={onMinus}>
                  -
                </button>
                <span class="text-yellow">{val.toString()}</span>
                <button type="button" class="but-pl ms-2 " onClick={onPlus}>
                  +
                </button>
                </div>
                <button type="button" class="click "  onClick={onSet}>Установить</button>
              </div>
            </>
          )}
        </div>
        <div class=" down-T">Температура= <span class="text-yellow">{temperStore.temper}</span></div>
      </div>
    </div>
  );
});

export default SetOut;
