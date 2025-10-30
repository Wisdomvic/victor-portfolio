document.addEventListener('DOMContentLoaded',()=>{
    const taskBtn = document.querySelector('#task');
    const dateBtn = document.querySelector('#date');
    const dropBtn = document.querySelector ('#drop');
    const addBtn = document.querySelector('#addtask');
    const deleteBtn = document.querySelector('#delete');
    const filterBtn = document.querySelector('#filter');
    const editBtn = document.querySelector('#edit');
    const listEl  = document.querySelector('#list');
    const totalBtn = document.querySelector('#total');

    let tasks = JSON.parse(localStorage.getItem('tasks'))  || [];
    let editIndex = null;

    // add task
    addBtn.addEventListener('click',()=>{
        const taskText = taskBtn.value.trim();
        const dropTask = dropBtn.value;

        if(taskText ==='') {
            alert('write down the task');
            return;
        }
      
        // if editing of task
        if(editIndex !== null) {
            tasks[editIndex] = taskText;
            editIndex = null;
            addBtn.textContent = 'Add Task';
        } else {
            // Add new task 
            tasks.push(taskText);
        }
          taskInput.value = '';
        saveAndRender();
    });

    //Edit Task Button
    editBtn.addEventListener('click',()=>{
        const taskItems = document.querySelectorAll('#list li');
        const index = prompt('Enter the task number you want to edit (starting from 1):');

     if(index && tasks[index - 1] !== undefined) {
      taskInput.value = task[index - 1];
      editIndex = index - 1;
      addBtn.textContent = 'update';
     } else {
        alert('Invalid task number');
     }
    });
    //Delete All 
    deleteBtn.addEventListener('click',()=>{
        if(confirm('Are you sure you want to delete all task'));{
        tasks = [];
        saveAndRender();
        }
    });
    // function to render all tasks 
    function renderTasks() {
        listEl.innerHTML = '';
        
    }
})
