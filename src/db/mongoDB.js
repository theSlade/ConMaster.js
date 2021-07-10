const mongoose = require("mongoose");
const path = require("path");

class conmasterDB {
  /**
   * @name  conmasterDB
   * @kind constructor
   * @param {Object} options options
   * @param {String} [options.uri] mongodb connection string (required)
   * @description Estabilishing an connection
   */
  constructor(options) {
    if (mongoose.connection.readyState !== 1) {
      if (!options.uri)
        throw new Error(
          "There is no established  connection with mongoose and a mongoose connection is required!"
        );
      mongoose.connect(options.uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    }
    this.model = require(require("path").join(__dirname, "Schema.js"));
  }
}

module.exports = conmasterDB;
