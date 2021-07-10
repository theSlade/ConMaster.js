// Data
const color = require("./data/colors.json");
const emoji = require("./data/emojis.json");

// DB
module.exports.conmasterDB = require("./src/db/mongoDB");
module.exports.Schema = require("./src/db/Schema");

// Functions
const passGen = require("./src/functions/passGen");

// Exports
module.exports = { color };
module.exports = { emoji };
module.exports = { passGen };
