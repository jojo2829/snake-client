let connection;

const handleUserInput = function() {
  
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("exit game");
      process.exit();
    } else if (key === "w") {
      connection.write("Move: up");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "d") {
      connection.write("Move: right");
    } else if (key === "m") {
      connection.write("Say: hihi");
    }
  });
  
};

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  handleUserInput,
  setupInput
};
