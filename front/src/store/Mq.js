import { makeAutoObservable, runInAction } from "mobx";
import mqtt from "mqtt";
import temperStore from "./TemperStore";

class Mq {
  constructor() {
    this._client = null;
    this._isSub = false;
    this._payload = {};
    this._listMessage = [];
    this._connectStatus = "Connect";
    this._numObject = "0802";
    this._login = "ab@m.ru";
    this._password = "1111";
    this._host = "home.navigard.ru";
    this._port = "9083";
    this._topicSub = "ab@m.ru/0802/devsend/#";
    this._topicPub = "ab@m.ru/0802/devrec/control";
    this._temper = 0;
    this._fout1 = 0;
    this._ftout1 = 0;
    this._sout1 = 0;
    makeAutoObservable(this, {});
  }

  get numObject() {
    return this._numObject;
  }
  get login() {
    return this._login;
  }
  get password() {
    return this._password;
  }
  get host() {
    return this._host;
  }
  get port() {
    return this._port;
  }
  get topicSub() {
    return this._topicSub;
  }
  get topicPub() {
    return this._topicPub;
  }
  get client() {
    return this._client;
  }
  get isSub() {
    return this._isSub;
  }
  get payload() {
    return this._payload;
  }
  get listMessage() {
    return this._listMessage;
  }
  get connectStatus() {
    return this._connectStatus;
  }
  get qos() {
    return this._qos;
  }

  setConnectStatus(s) {
    this._connectStatus = s;
  }
  setLogin(v) {
    this._login = v.target.value;
    this._topicSub = this._login + "/" + this._numObject + "/devsend/#";
    this._topicPub = this._login + "/" + this._numObject + "/devrec/control";
  }
  setHost(v) {
    this._host = v.target.value;
  }
  setPort(v) {
    this._port = v.target.value;
  }
  setPassword(v) {
    this._password = v.target.value;
  }
  setNumObject(numObject) {
    this._numObject = numObject;
    this._topicSub = this._login + "/" + this._numObject + "/devsend/#";
    this._topicPub = this._login + "/" + this._numObject + "/devrec/control";
  }

  mqttConnect(host, mqttOption) {
    if (this._connectStatus !== "Connect") {
      return;
    }
    console.log("mq try connect");
    this._connectStatus = "Connecting";
    this._client = mqtt.connect(host, mqttOption);

    if (this._client) {
      this._client.on("connect", () => {
        runInAction(() => {
          this._connectStatus = "Connected";
          console.log("connected");
          this._isSub = false;
          this.mqttSub();
        });
      });
      this._client.on("error", (err) => {
        runInAction(() => {
          console.error("Connection error: ", err);
          this._client.end();
          this._isSub = false;
          this._client = null;
          this._connectStatus = "Connect";
        });
      });
      this._client.on("reconnect", () => {
        runInAction(() => {
          this._connectStatus = "Reconnecting";
          this._isSub = false;
        });
      });
      this._client.on("message", (topic, message) => {
        runInAction(() => {
          const id = Math.random().toString().substr(2, 10);
          const p = { id, topic, message: message.toString() };
          this._listMessage.push(p);
          temperStore.recMes(p);
          // console.log("mes:", JSON.stringify(this._listMessage, null, 2));
        });
      });
    }
  }

  mqttDisconnect() {
    if (this._client) {
      console.log("disconnect");
      this._client.end(() => {
        runInAction(() => {
          this._connectStatus = "Connect";
          this._isSub = false;
          this._client = null;
          temperStore.clear();
        });
      });
    }
  }
  mqttPublish(context) {
    if (this._client) {
      // ab@m.ru/0802/devrec/control
      // this._topicPub =
      //  this._login + "/" + this._numObject + "/devrec/control";
      const qos = 1;
      const { payload } = context;
      temperStore.clear();
      this._client.publish(this._topicPub, payload, { qos }, (error) => {
        runInAction(() => {
          if (error) {
            console.log("Publish error: ", error);
          }
        });
      });
    }
  }

  mqttSub() {
    if (this._client && !this._isSub) {
      // ab@m.ru/0802/devsend/#
      // this._topicSub = this._login + "/" + this._numObject + "/devsend/#";
      const qos = 1;
      //const { topic, qos } = subscription;
      this._client.subscribe(this._topicSub, { qos }, (error) => {
        if (error) {
          runInAction(() => {
            console.log("Subscribe to topics error", error);
          });
        } else {
          runInAction(() => {
            console.log("sub ok");
            this._isSub = true;
            this.mqttPublish({ payload: "reqfout" });
          });
        }
      });
    }
  }

  mqttUnSub() {
    if (this._client) {
      //const { topic } = subscription;
      this._client.unsubscribe(this._topicSub, (error) => {
        runInAction(() => {
          if (error) {
            console.log("Unsubscribe error", error);
            return;
          }
          this._isSub = false;
        });
      });
    }
  }

  mqTryConnect() {
    if (this._connectStatus !== "Connect") {
      return;
    }
    const url = `ws://${this._host}:${this._port}`;
    const clientId = `112${Math.random().toString(16).substr(2, 12)}`;
    const options = {
      keepalive: 10,
      protocolId: "MQTT",
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 5000,
      connectTimeout: 10 * 1000,
    };
    options.clientId = clientId;
    options.username = this._login;
    options.password = this._password;
    this.mqttConnect(url, options);
  }
}

const mq = new Mq();

export default mq;
