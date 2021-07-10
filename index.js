// Data
const color = require("./src/data/colors.json");
const emoji = require("./src/data/emojis.json");

// DB
module.exports.conmasterDB = require("./src/db/mongoDB");
module.exports.Schema = require("./src/db/Schema");

// Functions
const passGen = require("./src/functions/passGen");
const ms = require("./src/functions/ms");

// Exports
module.exports = {
  color,
  emoji,
  passGen,
  ms,
};
