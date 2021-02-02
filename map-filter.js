const numbers = [3, 5, 4, 8, 6, 2, 7, 9];
const squareNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    squareNumbers.push(element * element);
}
console.log(squareNumbers);

const result = numbers.map(function (element) {
    return element * element;
});
console.log(result);

const result2 = numbers.map((x) => x * x);
console.log(result2);

const result3 = numbers.filter((x) => x > 5);
console.log(result3);
const result4 = numbers.filter((x) => x % 2 == 0);
console.log(result4);

// find method will return just only one value and will not return array.

const isThere = numbers.find((x) => x > 5);
console.log(isThere);
