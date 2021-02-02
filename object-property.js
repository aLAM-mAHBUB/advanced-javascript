const students = [
    { id: 21, name: "Omar Sunny" },
    { id: 31, name: "Razzak Hossen" },
    { id: 41, name: "Maana vai" },
    { id: 51, name: "Mahiya Mahi" },
    { id: 61, name: "Shirley Setia" },
];

const fullName = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    fullName.push(element.name);
}
console.log(fullName);

// Latest way

const names = students.map((s) => s.name);
const ids = students.map((s) => s.id);
const specialIds = students.filter((s) => s.id > 40);

// find method returns only the first matching element
const findsOnlyOne = students.find((s) => s.id > 50);
console.log(names, ids, specialIds);
console.log(findsOnlyOne);
