const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers - require("../ratio/index");
function ratioAndFactorial(a,b,c){
    const ratio = ratioOfTwoNumbers(a,b);
    const factorial = factorialOfNumber(c);
    return {ratio,factorial};
};
module.exports = ratioAndFactorial;