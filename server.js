const seratojs = require("seratojs");

// List all crates defined by user.
const crates = seratojs.listCratesSync();
console.log("------------");
console.log(crates);
console.log("------------");