const Generator = require("./generator.js");

class Converter extends Generator {
  constructor() {
    super();

    const $APPS = require('../../Config/config.js');
    this.$apps = new $APPS();

    const Crypto = require("crypto");
    this.$crypto = Crypto;
  }

  ConvertToHash($method = ["md5", "sha1", "sha256", "sha512"], $val) {
    const hash = this.$crypto.createHash($method);
    return hash.update($val).digest("base64");
  }

  EncodePassword($val) {
    const md5 = this.ConvertToHash("md5", $val);
    const sha1 = this.ConvertToHash("sha1", md5);
    const sha256 = this.ConvertToHash("sha256", sha1);
    return this.ConvertToHash("sha512", sha256);
  }

  ValToIDR($val) {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 2 }).format($val);
  }
}

module.exports = Converter;
