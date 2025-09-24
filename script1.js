// for The head
//wait until DOM is loaded(safe when you don't use)
document.addEventListener('DOMContentLoaded', () =>{

const taskInput = document.getElementById('taskinput'); // matches the HTML id
const clickBtn = document.getElementById("clickme");
const resetBtn = document.getElementById('reset');
const countEl = document.getElementById('count'); // Now added

/* Let count */
let counter = 0;

//3) Attach a click event listen
clickBtn.addEventListener('click', ()=>{
    counter++;     //Increasement
    countEl.textContent = counter; //update UI
    console.log('button clicked', counter, 'times');
    alert('I was clicked by you');
});

    //reset button listener reset counter
    resetBtn.addEventListener('click',() => {
        counter = 0;
        countEl.textcontent = counter;
        console.log('counter reset');
    });
});