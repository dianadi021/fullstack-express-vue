class Authorization {
  constructor() {
    const $APPS = require('../Config/config.js');
    this.$spps = new $APPS();

    const $Tools = require('../../Tools/tools.js');
    this.$tools = new $Tools();
  }

  CheckAuth() { }
}

module.exports = Authorization;