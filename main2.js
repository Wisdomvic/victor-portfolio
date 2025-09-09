// Taging
const flex = document.querySelector('.flex');

//variables
const name = "Student ";
const grade = 85;

//Object
const scoreGrade = {
    studentName: name , 
    studentGrade: grade
}; 
// Check Grade
if (grade>= 85){
    console.log(scoreGrade.studentName + "got an A");
} else if (grade >= 70){
    console.log(scoreGrade.studentName + "got a B");
} else if (grade >= 50) {
    console.log(scoreGrade.studentName + "got a C");
} else {
    console.log(scoreGrade.studentName + "failed ")
}