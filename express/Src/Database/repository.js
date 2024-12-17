const $APPS = require("../Config/config.js");
const $Tools = require("../Tools/tools.js");

const { IsValidVal } = new $Tools();
const { DB_CONNECTION } = new $APPS();

if (IsValidVal(DB_CONNECTION, "equal", "mongodb")) {
  var $Repository = require("./Repository/mongodb.js");
}

module.exports = $Repository;
