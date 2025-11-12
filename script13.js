document.addEventListener('DOMContentLoaded',()=> {
    const itemBtn = document.querySelector('#item');
   const quantityBtn = document.querySelector('#quantity');
   const priceBtn = document.querySelector('#price');
   const dropBtn = document.querySelector('#drop');
   const additemBtn = document.querySelector('#additem');
   const editBtn = document.querySelector('#edit');
   const deleteBtn = document.querySelector('#delete');
   const searchBtn = document.querySelector('#search');
   const filterBtn = document.querySelector('#filter');
   const clearBtn = document.querySelector('#clear');
   const listEl = document.querySelector('#list');
   const totalEl = document.querySelector('#total');

   /* Step  1 */
   let item = JSON.parse(localStorage.getItem('item')) || [];
   editIndex = null;
   function saveAndRender() {
    localStorage.setItem('item', JSON.stringify(item));
    saveAndRender();
   }
     function renderExpenses(filtered = expenses) {
        listEl.innerHTML = '';
        let total = 0;

         filtered.forEach((exp, index) => {
            const li = document.createElement('li');
            li.textContent = $(exp.item) - $(exp.price) - $(exp.drop) - $(exp.quantity);
            listEl.appendChild(li);
            total += parseFloat(exp.price);
        }); 

        totalEl.textContent = total.toFixed(2);
    }
          additemBtn.addEventListener('click',()=>{
           const itemText = itemBtn.value.trim();
             const priceText = priceBtn.value.trim();
          const quantityText = quantityBtn.value.trim();
            const dropSelect = dropBtn.value

            if(!item || !price || isNaN(price)) {
         alert('Input the task you want')
         return;
    }
          if(editIndex !== null) {
            item[editIndex] = {name,amount,category,date};
            editIndex = null;
            additemBtn.textContent = 'Add Task';
          } 

          editBtn.addEventListener('click',() =>{
            const index = prompt("Are you sure you want to  edit the task");
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
          searchBtn.addEventListener('click', () => {
        const query = prompt('Search for an expense name:').toLowerCase();
        const results = expenses.filter(exp => exp.name.toLowerCase().includes(query));
        renderExpenses(results);
    });

    renderExpenses();
   });
});
