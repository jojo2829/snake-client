const handleUserInput = function () {
  
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("exit game");
      process.exit();
    }
  });
  
};

const setupInput = function () {
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
}
