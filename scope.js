// global scope ... can be called anywhere.
const bonus = 20;
function sum(num1, num2) {
    // result block scope ...can't be called anywhere
    const result = num1 + num2 + bonus;
    console.log(result);
    // let / const block scope ... can't be called from outside
    // kono akta jinish declare korso ...setake uporer level a (parent) niye jawytake hoisting bole.
    // sudhu declaration part ta upore pathabe but value ager jaygatei thakbe.
    // error dibe na but value undefined bolbe.
    if (result > 9) {
        let mood = "happy";
        console.log(mood);
    }
    return result;
}

const output = sum(7, 3);
// console.log(output);
// console.log(bonus);
console.log(day);
var day = "Friday";
console.log(day);

// let and const scope variable ... ora bracket ar bitore thake.
//  and tader ke declaration ar age call korle, tara upore jayna.
