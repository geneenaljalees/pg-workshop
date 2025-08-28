const form = document.getElementById('user-form');
const table = document.getElementById('users-table');

const addUserRow = (user) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = user.name;

  const locationCell = document.createElement('td');
  locationCell.textContent = user.location;

  const deleteCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');

  deleteButton.addEventListener('click', async () => {
    const res = await fetch(`/delete-user/${user.id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      row.remove();
    } else {
      console.error('Error deleting user');
    }
  });
  deleteCell.appendChild(deleteButton);

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  row.appendChild(deleteCell);

  table.appendChild(row);
};

fetch('/users')
  .then((res) => res.json())
  .then((users) => {
    users.forEach(addUserRow);
  })
  .catch((err) => {
    console.log('Error fetching users', err);
  });

form
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      location: formData.get('location'),
    };
    const res = await fetch('/create-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const newUser = await res.json();
    addUserRow(newUser);
    form.reset();
  })
  .catch((err) => {
    console.log('Error adding user', err);
  });

  