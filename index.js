const os = require('os');

let res = os.platform();
console.log(res)

const cbw = require('./cbw');

console.log(cbw.add(3, 4));
console.log(cbw.hi)