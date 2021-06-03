const net = require('net');
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP.host,
    port: PORT.port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("player connected"); // code that does something when the connection is first established
    conn.write("Name: joo");
  });
  

  conn.on('data', (message) => {
    console.log('Server says: ' + message);
  });
  

  return conn;
};

module.exports = {
  connect
};