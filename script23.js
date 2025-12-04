document.addEventListener('DOMContentLoaded', () => {
  const loadBtn = document.querySelector('#load');
  const reloadBtn = document.querySelector('#reloaduser');
  const searchInput = document.querySelector('#searchInput');
  const usersContainer = document.querySelector('#usersContainer');
  const status = document.querySelector('#status');
  const genderButtons = document.querySelectorAll('.gender-btn');

  // In-memory storage of the last loaded users
  let users = [];
  let activeGender = 'all';

  // Fetch and render N users
  async function fetchUsers(count = 8) {
    usersContainer.innerHTML = '';
    status.textContent = 'Loading users…';
    try {
      const res = await fetch(`https://randomuser.me/api/?results=${count}`);
      if (!res.ok) throw new Error('Network response not ok');
      const data = await res.json();
      users = data.results; // store for search/filter
      status.textContent = `Loaded ${users.length} users.`;
      renderUsers(users);
    } catch (err) {
      console.error(err);
      status.textContent = 'Error loading users. Please try again.';
      usersContainer.innerHTML = `<div class="no-results">Failed to load users.</div>`;
    }
  }

  // Render given list of user objects (array)
  function renderUsers(list) {
    if (!Array.isArray(list) || list.length === 0) {
      usersContainer.innerHTML = `<div class="no-results">No users to display.</div>`;
      return;
    }

    const html = list.map(u => {
      const fullName = `${capitalize(u.name.first)} ${capitalize(u.name.last)}`;
      return `
        <div class="user-card" data-gender="${u.gender}">
          <img src="${u.picture.large}" alt="${fullName}">
          <h3>${fullName}</h3>
          <p><strong>Age:</strong> ${u.dob.age}</p>
          <p><strong>Gender:</strong> ${capitalize(u.gender)}</p>
          <p><strong>Country:</strong> ${u.location.country}</p>
        </div>
      `;
    }).join('');
    usersContainer.innerHTML = html;
  }

  // Helper: capitalise string
  function capitalize(s) {
    return typeof s === 'string' && s.length ? s[0].toUpperCase() + s.slice(1) : s;
  }

  // Filter users by search text and gender
  function filterAndRender() {
    const query = (searchInput.value || '').trim().toLowerCase();
    let filtered = users.slice(); // copy

    if (activeGender !== 'all') {
      filtered = filtered.filter(u => u.gender === activeGender);
    }

    if (query) {
      filtered = filtered.filter(u => {
        const name = `${u.name.first} ${u.name.last}`.toLowerCase();
        const country = (u.location.country || '').toLowerCase();
        return name.includes(query) || country.includes(query);
      });
    }

    if (filtered.length === 0) {
      usersContainer.innerHTML = `<div class="no-results">No results found.</div>`;
      status.textContent = `No matches for "${searchInput.value}".`;
    } else {
      status.textContent = `Showing ${filtered.length} user(s).`;
      renderUsers(filtered);
    }
  }

  // Event listeners
  loadBtn.addEventListener('click', () => fetchUsers(8));
  reloadBtn.addEventListener('click', () => fetchUsers(8));

  // live search (as you type)
  searchInput.addEventListener('input', () => filterAndRender());

  // gender filter buttons
  genderButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      genderButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeGender = btn.dataset.gender;
      filterAndRender();
    });
  });

  // Optional: auto-load on page open
  // fetchUsers(8);
});
