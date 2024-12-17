const Container = async (app, express) => {
 try {
  const CONTAINER_API = require("./api.js");
  app.use("/api", await CONTAINER_API());

  console.log(`Router is Ready!`);
 } catch ($err) {
  console.error(`Api Bridges catch:`, $err);
 }
};

module.exports = Container;
