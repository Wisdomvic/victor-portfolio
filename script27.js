document.addEventListener('Domcontentloaded',()=>{
    const loadcountries = document.querySelector('#loadcountries');
    const search = document.querySelector('#searchinput');
    const reloaduser = document.querySelector('#reloaduser');
    const countriesinform = document.querySelector('#countriesinform');

    // Aysnc Await
    async function fetchUsers (count = 10) {
        try{
            const response = await fetch('https://restcountries.com/v3.1/all')
            
            const countries = data;

              renderUser(countries)

        } catch (error) {
      countriesinform.innerHTML
    } 
    } 

    function renderUser(countries) {
        countriesinform.innerHTML = "";
        countries.forEach(user =>{
            const card = document.createElement('div');
            card.classList.add('usercard')
 
         card.innerHTML = `
             <img src="${countries.picture.large}" alt="country Image">
             <h3>${countries.name.first} ${countries.name.last}</h3>
             <p><strong>population:</strong> ${user.population}</p>
             <p><strong>Region:</strong> ${user.region}</p>
             <p><strong>Capital city:</strong> ${user.location.country}</p>
             
            `;
            userinform.appendChild(card);
        });
        // Load user 
        loadcountries.addEventListener('click',()=>fetchUsers(10));
        reloaduser.addEventListener('click',()=> fetchUsers())
    }
})