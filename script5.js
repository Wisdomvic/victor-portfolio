const taskInput = document.querySelector('#task');
const addTaskBtn = document.querySelector('#addtask');
const taskList = document.querySelector('#tasklist');

// Add event listner
addTaskBtn.addEventListener('click',()=> {
const newTask = taskInput.value.trim(); //get text
if(newTask !=="") {
    const li = document.createElement('li');
    li.textContent = newTask;
    taskList.appendChild(li); // add to ul 
    taskInput.value = "";
} else {
    alert("Please enter a task first");
}
});