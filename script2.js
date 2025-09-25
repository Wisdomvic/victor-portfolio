//DOM Manipulation
document.addEventListener('DOMContentLoaded', () =>{

const textInput = document.getElementById('textinput');
const clickBtn = document.getElementById('clickme');
const resetBtn = document.getElementById('reset');
const colorBtn = document.getElementById('color');
const countEl = document.getElementById('count');

// counter 
let counter = 0;
 
//for click
clickBtn.addEventListener('click', () =>{
    counter++;
    countEl.textContent = counter;
    console.log('button clicked', counter , 'times');

});

 //reset button listener reset counter
    resetBtn.addEventListener('click',() => {
        counter = 0;
        countEl.textContent = counter;
        console.log('counter reset');
    });

//Background button -> changed when clicked
colorBtn.addEventListener('click',() =>{
document.body.style.backgroundColor = "red";
console.log('Background changed to red');
    });

});