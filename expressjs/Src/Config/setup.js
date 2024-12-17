const Container = async (app, express) => {
  try {
    const cors = require("cors");
    const helmet = require('helmet');
    const morgan = require("morgan");

    const $APPS = require("./config.js");
    const { EXPRESS_LIMITER } = new $APPS();

    app.use(cors());
    app.use(morgan("short"));

    app.use(helmet());

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(require('./logs.js'));

    // app.use(EXPRESS_LIMITER());
  } catch ($err) {
    console.error(`Error setup apps! Catch:`, $err);
  }
};

module.exports = Container;
