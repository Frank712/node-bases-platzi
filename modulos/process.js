process.on("exit", () => {
  console.log("El proceso terminó!");
});

process.on("beforeExit", () => {
  console.log("ATENCION: El proceso está por terminar!");
});

process.on("uncaughtException", (err, origin) => {
  console.log("ALERTA: No capturamos este error!");
  console.log(err);
  console.log(origin);
});

console.log("Hello World!");

//funcionNoExistente();

console.log("GoodBye World!");
