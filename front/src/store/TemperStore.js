import { makeAutoObservable, runInAction } from "mobx";
import devSend from "../utils/devsend";

class TemperStore {
  constructor() {
    this._temper = 0x80;
    this._fout1 = 0;
    this._ftout1 = 0;
    this._sout1 = 0;
    this._fout2 = 0;
    this._ftout2 = 0;
    this._sout2 = 0;
    this._valid = false;
    makeAutoObservable(this, {});
  }

  clear() {
    runInAction(() => {
      this._temper = 0x80;
      this._fout1 = 0;
      this._ftout1 = 0;
      this._sout1 = 0;
      this._fout2 = 0;
      this._ftout2 = 0;
      this._sout2 = 0;
      this._valid = false;
    });
  }
  get temper() {
    if (this._temper === 0x80) {
      return "--";
    }
    return this._temper;
  }
  get fout1() {
    return this._fout1;
  }
  get ftout1() {
    return this._ftout1;
  }
  get sout1() {
    return this._sout1;
  }
  get fout2() {
    return this._fout2;
  }
  get ftout2() {
    return this._ftout2;
  }
  get sout2() {
    return this._sout2;
  }
  get valid() {
    return this._valid;
  }

  recMes(p) {
    const { topic, message } = p;
    const xx = devSend.parseMes(topic, message.toString());
    if (xx.valid) {
      runInAction(() => {
        this._temper = xx.temper ? xx.temper : 0x80;
        this._fout1 = xx.fout1;
        this._ftout1 = xx.ftout1;
        this._sout1 = xx.sout1;
        this._fout2 = xx.fout2;
        this._ftout2 = xx.ftout2;
        this._sout2 = xx.sout2;
        this._valid = true;
      });
    }
  }
}

const temperStore = new TemperStore();

export default temperStore;
