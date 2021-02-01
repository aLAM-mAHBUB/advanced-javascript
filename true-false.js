// Falsy Values
// 0
// ""
// undefined
// null
// NaN
// false

// Truthy Values
// "0"
// " "
//
// []
// {}
let name = 0;
// To avoid zero as a falsy value, we check if condition like this.
if (name || name == 0) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}
