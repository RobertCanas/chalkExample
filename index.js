var chalk = require("chalk");

var message = chalk.yellow.bgBlack.dim("Hello ") + chalk.red.bold.underline("World! ") + chalk.inverse.blue("I am blue!");
console.log(message);