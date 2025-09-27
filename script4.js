//DOM Manipulation 
function buttonReset() {
document.addEventListener('DOMContentLoaded',() =>{
    const messageBtn = document.getElementById("message");
    const clickBtn = document.getElementById("clickme");
    const resetBtn = document.getElementById("reset");
    const countEl = document.getElementById("count")
    const colorBtn = document.getElementById("color");
    const generalBtn = document.getElementById("general");

    //---Greeting button
if (messageBtn) {
messageBtn.addEventListener('click',()=>{
    alert("welcome to my page");
  const name = prompt("what is your name?");
  console.log("name:", name);

  //confirm question
  if(confirm("Do you want to continue?")){
    console.log("Welcome to my page");
  } else {
    console.log("Goodbye 👋");
  }
});
}

    //--Counter Logic
    let counter = 0;

    clickBtn.addEventListener('click', ()=> {
 counter++;
countEl.textContent = counter;
console.log("button clicked",counter, 'times');

    });

    // Reset button
    resetBtn.addEventListener('click',() => {
        if(confirm("Are you sure you want to reset?")) {
 counter = 0
 countEl.textContent = counter;
console.log("Reset Completed");
 } else {
console.log("Rest canceled ❌");
 }
    });

//--- Background Color only
colorBtn.addEventListener('click',() => {
document.body.style.backgroundColor = "red";
console.log("Color changed to red ");
});

//For changed of General Changed of color
generalBtn.addEventListener('click',() =>{
  const fav =   prompt("What is your favourite color?");
    confirm("Are you sure ${fav} is your favourite ?");
    
 const r = Math.floor(Math.random() * 256);
 const g = Math.floor(Math.random() * 256);
 const b = Math.floor(Math.random () * 256);
 const randomColor = `rgb(${r}, ${g}, ${b})`;

 document.body.style.backgroundColor = randomColor;
 console.log("Background changed to",randomColor);
 alert("Random Background activated");
})
    });

}

//call to action
buttonReset();