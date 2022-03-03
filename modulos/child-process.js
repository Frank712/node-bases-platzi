const { exec, spawn } = require("child_process");

// exec("node --version", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
//   console.log(stdout);
// });

let process = spawn("ls", ["-laH"]);
console.log(process.pid);
console.log(process.connected);

process.stdout.on("data", (dato) => {
  console.log(process.killed);
  console.log(dato.toString());
});

process.on("exit", function () {
  console.log("El proceso terminó");
  console.log(process.killed);
});

console.log(process.killed);
