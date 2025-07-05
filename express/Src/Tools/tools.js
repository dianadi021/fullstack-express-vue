const Converter = require('./Function/converter.js');

class Tools extends Converter {
  constructor() {
    super();

    const Bcrypt = require("bcrypt");
    this.$bcrypt = Bcrypt;
  }

  async BCreate($val, $rounds = null) {
    const rounds = (this.IsValidVal($rounds) ? $rounds : 0);
    return await this.$bcrypt.hash($val, rounds);
  }

  async BCompare($val, $compare) {
    return await this.$bcrypt.compare($val, $compare);
  }
}

module.exports = Tools;