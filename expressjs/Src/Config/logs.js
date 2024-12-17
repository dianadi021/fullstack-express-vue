const Container = async (req, res, next) => {
 try {
  const fs = require("fs");
  const path = require("path");

  const $Tools = require("../Tools/tools.js");
  const { GetDateTimeNow, SetRequest } = new $Tools();

  const dateNow = GetDateTimeNow();
  const [date, times] = dateNow.split(" ");

//   if (req.url.includes("control") && ["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) {
  if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method.toUpperCase())) {
   const logData = {
    timestamp: dateNow,
    method: req.method,
    url: req.url,
    body: SetRequest(req),
   };

   const logsDir = path.join("Src", "Public", "Logs");
   const logFile = path.join(logsDir, `${date}-logs.json`);
   if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
   }

   fs.appendFileSync(logFile, JSON.stringify(logData), (err) => {
    if (err) throw err;
   });
  }
  next();
 } catch ($err) {
  console.error(`Error server logging Catch: ${$err}`);
 }
};

module.exports = Container;
