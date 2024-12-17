const moment = require("moment");

const $APPS = require('../../Config/config.js');
const $apps = new $APPS();

const Function = require("./function.js");
const { IsValidVal } = new Function();

class Generator extends Function {
  constructor() {
    super();
  }

  GetUniqCode($length) {
    const timestamp = Date.now();
    const str = `1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZCXVBNM`;

    let code = timestamp.toString();
    for (let indx = 0; indx < $length; indx++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      code += str[randomIndex];
    }

    return code;
  }

  GetDateTimeNow($val) {
    require("moment-timezone");
    return IsValidVal($val) ? moment.tz($val, $apps.APP_TIMEZONE).format("DD-MM-YYYY HH:mm:ss") : moment.tz($apps.APP_TIMEZONE).format("DD-MM-YYYY HH:mm:ss");
  }
}

module.exports = Generator;
