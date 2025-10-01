const taskBtn = document.querySelector('#task');
const addtaskBtn = document.querySelector('#addtask');
const clearBtn = document.querySelector('#clear');
const tasklistBtn = document.querySelector('#tasklist')

//Add task
addtaskBtn.addEventListener("click", addTask);

// function for add task
function addTask() {
const taskText = taskBtn.value.trim();


if (taskText === "") {
    alert("Please enter a task");
    return;
}

 // Create <li> element
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add complete toggle
  li.addEventListener("click", () => {
    li.tasklistBtn.toggle("completed");
  });

  //Append to UL
  tasklistBtn.appendChild(li);

  //clear input after adding
  taskInput.value = "";
}

// clear all tasks 
clearBtn.addEventListener("click",()=>{
    if(confirm("Are you sure you want to clear all tasks?")){
        taskList.innerHTML = "";
        console.log("All tasks cleared");
    }
})