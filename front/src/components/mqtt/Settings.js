import React from "react";
import mq from "../../store/Mq";
import { observer } from "mobx-react-lite";

const Settings = observer(() => {
  return (
    <div className="container">
      <div className="mb-2 row ">
        <label className="col-sm-3">Host</label>
        <div className="col-sm-9">
          <input
            className="strvvod"
            onChange={(v) => mq.setHost(v)}
            value={mq.host}
          />
        </div>
      </div>
      <div className="mb-2 row">
        <label className="col-sm-3">Host</label>
        <div className="col-sm-9">
          <input
            className="strvvod"
            onChange={(v) => mq.setPort(v)}
            value={mq.port}
          />
        </div>
      </div>
      <div className="mb-2 row">
        <label className="col-sm-3">Port</label>
        <div className="col-sm-9">
          <input
            className="strvvod"
            onChange={(v) => mq.setLogin(v)}
            value={mq.login}
          />
        </div>
      </div>
      <div className="mb-2 row">
        <label className="col-sm-3">Password</label>
        <div className="col-sm-9">
          <input
            className="strvvod"
            type="password"
            onChange={(v) => mq.setPassword(v)}
            value={mq.password}
          />
        </div>
      </div>
      <div className="mb-2 row ">
        <label className="col-sm-3">Object</label>
        <div className="mb-2 col-md-9 ">
          <input
            className="strvvod"
            onChange={(v) => mq.setNumObject(v)}
            value={mq.numObject}
          />
        </div>
      </div>
      <hr />
    </div>
  );
});

export default Settings;
