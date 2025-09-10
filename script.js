// Tagging
const container = document.querySelector('.container');

/* // variables
const person = {
    name: "victor",
    age: 21,
    country:"Nigeria",
    favourite:"Javascript"
};
console.log(person);
 */

// Variables
const person = "victor";
const age = 21;

// object properties
const newCountry ={
    name:"Nigeria",
    capital: "Abuja",
continent:"African"
};

//function to display info
function introducePerson() {
    console.log(person + " is " + age + " years old ");
    console.log("He is  from " + newCountry.name + " which is in " + newCountry.continent + " .");
    console.log("The capital city is " + newCountry.capital + ".");
}

// call the function
introducePerson();