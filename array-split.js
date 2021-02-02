const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = nums.slice(2, 5);

const removed = nums.splice(2, 2, 77, 88, 99, 55, 44);

console.log(removed);
// console.log(part);
console.log(nums);

const together = nums.join(" ");

console.log(typeof together);
console.log(together);
