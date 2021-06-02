const net = require('net');

const connect = () => {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("player connected"); // code that does something when the connection is first established
  });

  conn.on('data', (message) => {
    console.log('Server says: ' + message);
  });
  

  return conn;
};

console.log("Connecting ...");

module.exports = connect;