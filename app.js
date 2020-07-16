const yargs = require("yargs");

const options = yargs
.usage("Usage: -h <hexString>")
 .option("h", { alias: "hexString", describe: "hexString to convert", type: "string", demandOption: true })
 .argv;
var base64String = Buffer.from(`${options.hexString}`,'hex').toString('base64')
console.log(base64String);

