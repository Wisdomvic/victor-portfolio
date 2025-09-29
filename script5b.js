const lightBtn = document.querySelector('#light');
const darkBtn = document.querySelector('#dark');
const randombtn = document.querySelector('#random');

// Picking Light  id
lightBtn.addEventListener('click', ()=> {
document.body.style.backgroundColor = "white";
lightBtn.textContent = "White color"
console.log("On white mode");
alert("White mode Activated Successfully");
});

// Picking Dark Id
darkBtn.addEventListener('click',() => {
    document.body.style.backgroundColor = "black";
    darkBtn.textContent = "Black color";
    console.log("on Dark mode");
    alert("Dark mode Activated successfully");
});

// For random color
randombtn.addEventListener('click',()=>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
const randomColor = `rgb(${r}, ${g}, ${b})`;
document.body.style.backgroundColor = randomColor;
randombtn.textContent = "Always Random color";
console.log("Background changed to",randomColor);
 alert("Random Background activated");
})

