function fullResult() {
// User Name
const userName = prompt("What is your full name ?");
console.log("User Name:", userName);

// User score
const userScore = Number(prompt ("what is your score out of 100 ?"));
console.log("User Score:", userScore);

//validation
if(isNaN(userScore) || userScore < 0 || userScore > 100){
    alert("please enter a valid score between 0 to 100.");
    return fullResult();
}

// Grade calculation
let grade;
if (userScore >= 90){
 grade = "A";
} else if (userScore >= 75){
    grade = "B";
}else if (userScore >= 50){
    grade = "c";
} else {
    grade = "F";
}

//Displayed Result
alert(`${userName}, your grade is ${grade}`);
console.log(`${userName} scored: ${grade}`);

// Confirm Action
if (confirm("Do you wnat to calculate again ?")) {
    fullResult();
} else {
    console.log("Calculation completed ✅");
}
}

// function call out
fullResult();