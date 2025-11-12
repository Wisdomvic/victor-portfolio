document.addEventListener('DOMContentLoaded',()=> {
    const taskBtn = document.querySelector('#task');
    const dropBtn = document.querySelector('#drop');
    const addtaskBtn = document.querySelector('#addtask');
    const editBtn = document.querySelector('#edit');
    const deleteBtn = document.querySelector('#delete');
    const searchBtn = document.querySelector('#search');
    const listEl = document.querySelector('#list');
    const totalEl = document.querySelector('#total');

    /* local Storage */
    let task = JSON.parse(localStorage.getItem('task')) || [];
    let editIndex = null;
    let total = 0;
    
    addtaskBtn.addEventListener('click',()=> { 
      let taskText = taskBtn.value.trim();
      let dropItem = dropBtn.value
    
      
      if(taskText === '') {
        alert('Write down the task');
        return;

      }
      if(editIndex !== "") {
        task[editIndex] = {text: taskText, drop:
          dropItem
        };
        editIndex = null
        taskBtn.textContent = 'add task'
      }
      
      
    });

    editBtn.addEventListener('click',()=> {
      const index = prompt('Are you sure you want to edit this task');
    })
    deleteBtn.addEventListener('click',()=>{
      const index = prompt('Enter the task number you want to delete:');
       if (index && task[index - 1]) {
            task.splice(index - 1, 1);
            saveAndRender();
        } else {
            alert('Invalid number.');
        }
    })

    searchBtn.addEventListener('click',()=>{
         const query = prompt('Search for an Task name:').toLowerCase();
        const results = task.filter(exp => exp.name.toLowerCase().includes(query));
        rendertask(results);
    });
    rendertask();
})