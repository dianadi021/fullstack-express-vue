const $APPS = require("../Config/config.js");
const $Tools = require("../Tools/tools.js");

const { IsValidVal } = new $Tools();
const { DB_CONNECTION } = new $APPS();

if (IsValidVal(DB_CONNECTION, "equal", "mongodb")) {
  var $Modul = require("./Connect/mongodb.js");
}

module.exports = $Modul;
