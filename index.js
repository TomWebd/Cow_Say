const myInformations = require('./information.js');

const cowsay = require("./node_modules/cowsay/index.js");

console.log(cowsay.say({
    text : `Hello ! I'm ${myInformations.a} from ${myInformations.b}`,
    e : "oO",
    T : "U "
}));