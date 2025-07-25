document.addEventListener('DOMContentLoaded', () => {
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.body.style.padding = '20px';

  const heading = document.createElement('h1');
  heading.textContent = 'Admin Dashboard – Donations';
  document.body.appendChild(heading);

  // Form for Create/Update
  const form = document.createElement('form');
  form.style.marginBottom = '20px';

  const nameInput = document.createElement('input');
  nameInput.placeholder = 'Donor Name';
  nameInput.required = true;
  nameInput.style.marginRight = '10px';

  const amountInput = document.createElement('input');
  amountInput.placeholder = 'Amount (KES)';
  amountInput.type = 'number';
  amountInput.required = true;
  amountInput.style.marginRight = '10px';

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Add Donation';

  form.append(nameInput, amountInput, submitBtn);
  document.body.appendChild(form);

  // Table for Donations
  const table = document.createElement('table');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.style.marginTop = '20px';

  const headerRow = document.createElement('tr');
  ['Name', 'Amount (KES)', 'Actions'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    th.style.border = '1px solid #ccc';
    th.style.padding = '10px';
    th.style.backgroundColor = '#f5f5f5';
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  document.body.appendChild(table);

  let donations = JSON.parse(localStorage.getItem('donations')) || [];
  let editIndex = null;

  function saveDonations() {
    localStorage.setItem('donations', JSON.stringify(donations));
  }

  function renderTable() {
    // Remove old rows
    const oldRows = Array.from(table.querySelectorAll('tr')).slice(1);
    oldRows.forEach(row => row.remove());

    if (donations.length === 0) {
      const noData = document.createElement('p');
      noData.textContent = 'No donations available.';
      document.body.appendChild(noData);
      return;
    }

    donations.forEach((donation, index) => {
      const row = document.createElement('tr');

      ['name', 'amount'].forEach(key => {
        const td = document.createElement('td');
        td.textContent = donation[key];
        td.style.border = '1px solid #ccc';
        td.style.padding = '10px';
        row.appendChild(td);
      });

      // Actions
      const actionsTd = document.createElement('td');
      actionsTd.style.border = '1px solid #ccc';
      actionsTd.style.padding = '10px';

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.style.marginRight = '10px';
      editBtn.onclick = () => {
        nameInput.value = donation.name;
        amountInput.value = donation.amount;
        submitBtn.textContent = 'Update Donation';
        editIndex = index;
      };

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => {
        if (confirm('Are you sure you want to delete this donation?')) {
          donations.splice(index, 1);
          saveDonations();
          renderTable();
        }
      };

      actionsTd.append(editBtn, deleteBtn);
      row.appendChild(actionsTd);
      table.appendChild(row);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (!name || isNaN(amount)) return;

    const newDonation = { name, amount };

    if (editIndex !== null) {
      donations[editIndex] = newDonation;
      editIndex = null;
      submitBtn.textContent = 'Add Donation';
    } else {
      donations.push(newDonation);
    }

    nameInput.value = '';
    amountInput.value = '';
    saveDonations();
    renderTable();
  });

  renderTable();
});