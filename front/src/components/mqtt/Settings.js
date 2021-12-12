import React from "react";
import mq from "../../store/Mq";

const Settings = () => {
  return (
    <div className="container">
      <div className="mb-2 row">
        <label className="col-sm-2">Host</label>
        <div className="col-sm-2">
          <input onChange={(v) => mq.setHost(v)} value={mq.host} />
        </div>
      </div>
      <div className="mb-2 row">
        <label className="col-sm-2">Host</label>
        <div className="col-sm-2">
          <input onChange={(v) => mq.setPort(v)} value={mq.port} />
        </div>
      </div>
      <div className="mb-2 row">
        <label className="col-sm-2">Port</label>
        <div className="col-sm-2">
          <input onChange={(v) => mq.setLogin(v)} value={mq.login} />
        </div>
      </div>
      <div className="mb-2 row">
        <label className="col-sm-2">Password</label>
        <div className="col-sm-2">
          <input
            type="password"
            onChange={(v) => mq.setPassword(v)}
            value={mq.password}
          />
        </div>
      </div>
      <div className="mb-2 row">
        <label className="col-sm-2">Object</label>
        <div className="col-sm-2">
          <input onChange={(v) => mq.setNumObject(v)} value={mq.numObject} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
