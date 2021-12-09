// get filesystem module
const fs = require("fs");

// using the readFileSync() function
// and passing the path to the file
const buffer = fs.readFileSync("config.json");

const json = JSON.parse(buffer.toString());

module.exports = json;