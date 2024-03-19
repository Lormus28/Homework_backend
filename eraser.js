const os = require('os');

let cpu = os.cpus();
//console.log(cpu);

let user = os.hostname();
//console.log(user);

const nombreUsuario = os.userInfo().username;
//console.log(nombreUsuario);

let totalmem = os.totalmem();
//console.log(totalmem);

const ramGB = (os.totalmem() / Math.pow(1024, 2));
console.log(ramGB);