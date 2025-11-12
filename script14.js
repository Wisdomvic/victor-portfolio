document.addEventListener('DOMContentLoaded',()=>{
    const goalBtn = document.querySelector('#goal');
    const dateBtn = document.querySelector('#date');
    const dropBtn = document.querySelector('#drop');
    const editBtn = document.querySelector('#edit');
    const completeBtn = document.querySelector('#complete');
    const filterBtn = document.querySelector('#filter');
    const searchBtn = document.querySelector('#search');
    const deleteBtn = document.querySelector('#delete');
    const clearBtn = document.querySelector('#clear');

    let goal = JSON.parse(localStorage.getItem('goal'))  || [];
    editIndex = null;
      
    function saveAndRender() {
        localStorage.setItem('goal', JSON.stringify(goal));
        saveAndRender();
    }
      
     goalBtn.addEventListener('click',()=>{
        const goalText = goalBtn.value.trim();
        const dateText = dateBtn.value
        const dropItem = dropBtn.value

        if (goalText === '') {
            alert('Write down your task');
            return;
        }

          if(editIndex !=="") {
            goal[editIndex] = {High, medium , low};
            editIndex = null;
            goalBtn.textContent = 'Add task';
          }
        
     }); 
      
     editBtn.addEventListener('Click', ()=>{
        const index = prompt('Are you sure you want to edit your task');
     });

     deleteBtn.addEventListener('click',()=>{
        const index = prompt('Enter the expense number to delete:');
        if (index && expenses[index - 1]) {
            expenses.splice(index - 1, 1);
            saveAndRender();
        } else {
            alert('Invalid number.');
        }
     });

     searchBtn.addEventListener('click',()=>{
         const query = prompt('Search for an expense name:').toLowerCase();
        const results = expenses.filter(exp => exp.name.toLowerCase().includes(query));
        renderExpenses(results);
    });

    renderExpenses();
});