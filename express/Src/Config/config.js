const Redis = require("ioredis");
const ExpressLimiter = require("express-rate-limit");

const $Tools = require("../Tools/Function/function.js");
const { IsValidVal } = new $Tools();

class APPS {
  APP_NAME = IsValidVal(process.env.APP_NAME, "value", "ExpressJS | @dianadi021");
  APP_TIMEZONE = IsValidVal(process.env.APP_TIMEZONE, "value", "Asia/Jakarta");

  APP_DOMAIN = IsValidVal(process.env.APP_DOMAIN, "value", "localhost");
  APP_IPV4 = IsValidVal(process.env.APP_IPV4, "value", "127.0.0.1");
  APP_PORT = IsValidVal(process.env.APP_PORT, "value", 9000);
  APP_STATUS = IsValidVal(process.env.APP_STATUS, "value", "development");

  BCRYPT_ROUNDS = IsValidVal(process.env.BCRYPT_ROUNDS, "value", 12);

  MONGO_URI = IsValidVal(process.env.MONGO_URI, "value");

  DB_CONNECTION = IsValidVal(process.env.DB_CONNECTION, "value");

  DB_HOST = IsValidVal(process.env.DB_HOST, "value", "127.0.0.1");
  DB_PORT = IsValidVal(process.env.DB_PORT, "value");
  DB_DATABASE = IsValidVal(process.env.DB_DATABASE, "value", "exampleDB");
  DB_USERNAME = IsValidVal(process.env.DB_USERNAME, "value");
  DB_PASSWORD = IsValidVal(process.env.DB_PASSWORD, "value");

  REDIS_CLIENT = IsValidVal(process.env.REDIS_CLIENT, "value");
  REDIS_HOST = IsValidVal(process.env.REDIS_HOST, "value", "127.0.0.1");
  REDIS_PASSWORD = IsValidVal(process.env.REDIS_PASSWORD, "value");
  REDIS_PORT = IsValidVal(process.env.REDIS_PORT, "value", 6379);

  JWT_SECRET = IsValidVal(process.env.REDIS_PORT, "value", "secret");

  REDIS_SETUP() {
    return new Redis({
      host: IsValidVal(process.env.REDIS_HOST, "value", "127.0.0.1"),
      port: IsValidVal(process.env.REDIS_PORT, "value", 6379)
    });
  }

  EXPRESS_LIMITER() {
    return new ExpressLimiter({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per window
    });
  };
}

module.exports = APPS;
