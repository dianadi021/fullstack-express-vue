const Container = async (app, express) => {
 try {
  const { DB_CONNECTIONS } = require("../Database/database.js");

  // Database connections
  await DB_CONNECTIONS();

  // All NodeJS imported library
  await require("../Config/setup.js")(app, express);
 } catch ($err) {
  console.error(`Error running database! Catch:`, $err);
 }
};

module.exports = Container;
