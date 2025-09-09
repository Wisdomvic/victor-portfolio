// functions of console.
const grid = document.querySelector('.grid');

// Create a variables
const name = "student A";
const score = 85;
const resultPass = true;

const user ={
    studentName: name,
    studentScore:score,
studentResultPass:resultPass
};

console.log("Name", name);
console.log("Score", score);
console.log("User Object:", user);
console.table(user);