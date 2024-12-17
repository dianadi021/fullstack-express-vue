(async function () {
  try {
    const express = require("express");
    const app = new express();

    const $Tools = require("./Tools/tools.js");
    const $APPS = require("./Config/config.js");

    const { IsValidVal } = new $Tools();
    const { APP_STATUS, APP_DOMAIN, APP_PORT } = new $APPS();

    if (IsValidVal(APP_STATUS, "equal", "production")) {
      const fs = require("fs");

      var sslCertificate = {
        key: fs.readFileSync(`/etc/letsencrypt/live/${APP_DOMAIN}/privkey.pem`),
        cert: fs.readFileSync(`/etc/letsencrypt/live/${APP_DOMAIN}/cert.pem`),
        ca: fs.readFileSync(`/etc/letsencrypt/live/${APP_DOMAIN}/fullchain.pem`),
      }
    }

    // Server Services
    await require("./App/server.js")(app, express);

    // Router Services
    await require("./Router/router.js")(app, express);

    if (IsValidVal(APP_STATUS, "equal", "production")) {
      const https = require("https");

      https.createServer(sslCertificate, app).listen(APP_PORT, function () {
        console.log(`App listening on https://${APP_DOMAIN}:${APP_PORT} 🚀`);
      });
    } else {
      app.listen(APP_PORT, function () {
        console.log(`App listening on http://${APP_DOMAIN}:${APP_PORT} 🚀`);
      });
    }
  } catch ($err) {
    console.error(`Error running server! Catch:`, $err);
  }
})();
