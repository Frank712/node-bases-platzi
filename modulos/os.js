const os = require("os");
const SIZE = 1024;

console.log(os.arch());
console.log(os.platform());

console.log(os.cpus().length);
console.log(os.constants);
console.log(os.freemem());
console.log(kb(os.freemem()), " KB");
console.log(mb(os.freemem()), " MB");
console.log(gb(os.freemem()), " GB");
console.log(gb(os.totalmem()), " GB");
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());

function kb(bytes) {
  return bytes / SIZE;
}

function mb(bytes) {
  return kb(bytes) / SIZE;
}

function gb(bytes) {
  return mb(bytes) / SIZE;
}
