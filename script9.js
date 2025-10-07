document.addEventListener('DOMContentLoaded',() =>{
    const taskBtn = document.querySelector('#task');
    const addtaskBtn = document.querySelector('#addtask');
    const resetBtn = document.querySelector('#reset');
    const historyBtn = document.querySelector('#history');
    const countEl = document.querySelector('#count');
    const list = document.querySelector('#list');

    //  for counter and history for storing
    let counter =  0;
    let history = [];

    // step 1 for adding of task
    addtaskBtn.addEventListener('click',()=>{
const taskText = taskBtn.value.trim();

// step 2 that is the looping 
if (taskText === '') {
alert("Please enter the task")
return;
}

// step 3 create a task object and push it into an array
    const newTask = { task: taskText};
    history.push(newTask);

// step 4 create an li element
const li = document.createElement('li');
 li.textContent = taskText;

 // step 5 Allow user mark task as completed
 li.addEventListener('click',()=>{
    li.classList.toggle('completed');
 });

 // Add the <li> to the list
 list.appendChild(li);

 //  step 7 is for increasing of counter
counter++;
countEl.textContent = counter;
taskBtn.value = '';
    });

    resetBtn.addEventListener('click',()=>{
        if(confirm('Are you sure you want to reset all ')) {
            // reset array
        history = [];
        list.innerHTML = '';
        counter = 0;
        countEl.textContent = counter;
        console.log('All tasks have been cleared !');
        alert('All tasks cleared successfully !');
        }
    });
});