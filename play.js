const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

const connReturn = connect();

setupInput(connReturn);

module.exports = {
  connect
};