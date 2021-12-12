class DevSend {
  constructor() {
    this.dv12v = "0";
    this.fout = [];
    this.ftout = [];
    this.temper = [];
    this.sout = [];
  }

  clear() {
    this.dv12v = "0";
    this.fout = [];
    this.ftout = [];
    this.temper = [];
    this.sout = [];
  }

  getValFromHex(mes) {
    let val = [];

    const len = mes.length / 2;
    for (let i = 0; i < len; i++) {
      const c = "0x" + mes.substring(i * 2, i * 2 + 2);
      const b = parseInt(c, 16);
      val.push(b);
    }
    //console.log("val", JSON.stringify(val, null, 2));
    return val;
  }
  getValFromBits(mes) {
    let val = [];
    let bytes = this.getValFromHex(mes);
    bytes.forEach((b) => {
      for (let i = 0; i < 8; i++) {
        let c = 0;
        if ((b & (1 << i)) !== 0) c = 1;
        val.push(c);
      }
    });
    return val;
  }

  parseMes(topic, mes) {
    const i1 = topic.indexOf("devsend/") + 8;
    const t = topic.substring(i1);
    // console.log("topic=", t);

    let arrStr = [];

    if (t === "config/fout") {
      this.fout = this.getValFromHex(mes);
      // console.log("fout", JSON.stringify(this.fout, null, 2));
    } else if (t === "config/ftout") {
      this.ftout = this.getValFromHex(mes);
      // console.log("ftout", JSON.stringify(this.ftout, null, 2));
    } else if (t === "status/sout") {
      this.sout = this.getValFromBits(mes);
      // console.log("sout", JSON.stringify(this.sout, null, 2));
    } else if (t === "status/param") {
      arrStr = mes.split("&");
      arrStr.forEach((a) => {
        const b = a.split("=");
        if (b[0] === "dv_12v") {
          this.dv12v = b[1];
        } else if (b[0] === "temper") {
          this.temper = this.getValFromHex(b[1]);
        }
      });
      // console.log("arrStr", JSON.stringify(arrStr, null, 2));
    }
    this.log1();

    const xx = {
      fout1: this.fout[0],
      ftout1: this.ftout[0],
      sout1: this.sout[0],
      fout2: this.fout[1],
      ftout2: this.ftout[1],
      sout2: this.sout[1],
      temper: this.temper[0],
      valid: false,
    };

    let valid = true;
    if (this.fout.length === 0) valid = false;
    if (this.ftout.length === 0) valid = false;
    if (this.sout.length === 0) valid = false;
    //if (this.temper.length === 0) valid = false;
    xx.valid = valid;
    return xx;
  }

  log1() {
    if (this.sout.length !== 0) console.log("out1=", this.sout[0].toString());
    if (this.fout.length !== 0) console.log("fout1=", this.fout[0].toString());
    if (this.ftout.length !== 0)
      console.log("ftout1=", this.ftout[0].toString());
    if (this.sout.length !== 0) console.log("out2=", this.sout[1].toString());
    if (this.fout.length !== 0) console.log("fout2=", this.fout[1].toString());
    if (this.ftout.length !== 0)
      console.log("ftout2=", this.ftout[1].toString());
    if (this.temper.length !== 0)
      console.log("temp1=", this.temper[0].toString());
    console.log("u12v=", this.dv12v);
  }
}

const devSend = new DevSend();

export default devSend;
