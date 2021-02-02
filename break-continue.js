// condition onujayi break kore dibe.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) {
        break;
    }
    // console.log(nums[i]);
}

// condition onujayi ignore kore jabe.
const number = [1, 2, 3, -4, 5, -6, 7, -8, 9];
for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
        continue;
    }
    console.log(number[i]);
}
