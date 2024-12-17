const mongoose = require("mongoose");
const { connect } = mongoose;

const $APPS = require("../../Config/config.js");
const $Tools = require("../../Tools/tools.js");

const { IsValidVal } = new $Tools();
const { MONGO_URI, DB_CONNECTION, APP_DOMAIN, DB_PORT, DB_DATABASE } = new $APPS();
const DB_SERVER = IsValidVal(MONGO_URI) ? MONGO_URI : `${DB_CONNECTION}://${APP_DOMAIN}:${DB_PORT}/${DB_DATABASE}`;

const DB_CONNECTIONS = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      poolSize: 10,
      writeConcern: {
        w: "majority",
        j: true,
        wtimeout: 1000,
      },
    };

    await connect(`${DB_SERVER}`, options)
      .then(function (_) {
        console.log("Success connected to MongoDB!");
      })
      .catch(function ($err) {
        throw new Error($err);
      });
  } catch ($err) {
    console.error(`Failure to connect ${DB_SERVER} error:`, $err);
  }
};

module.exports = { DB_CONNECTIONS, DB_SERVER, mongoose };
