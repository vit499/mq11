import React from "react";
import mq from "../../store/Mq";

const Settings = () => {
  return (
    <div className="container">
      <div className="mb-2 row">
        <label className="col-sm-3">Host</label>
        <div className="col-sm-9">
          <input class="strvvod" onChange={(v) => mq.setHost(v)} value={mq.host} />
        </div>
      </div>
      <div className="mb-2 row">
        <label className="col-sm-3">Host</label>
        <div className="col-sm-9">
          <input class="strvvod" onChange={(v) => mq.setPort(v)} value={mq.port} />
        </div>
      </div>
      <div className="mb-2 row">
        <label className="col-sm-3">Port</label>
        <div className="col-sm-9">
          <input class="strvvod" onChange={(v) => mq.setLogin(v)} value={mq.login} />
        </div>
      </div>
      <div className="mb-2 row">
        <label className="col-sm-3">Password</label>
        <div className="col-sm-9">
          <input
          class="strvvod"
            type="password"
            onChange={(v) => mq.setPassword(v)}
            value={mq.password}
          />
        </div>
      </div>
      <div className="mb-2 row ">
        <label className="col-sm-3">Object</label>
        <div className="mb-2 col-md-9 ">
          <input class="strvvod" onChange={(v) => mq.setNumObject(v)} value={mq.numObject} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
