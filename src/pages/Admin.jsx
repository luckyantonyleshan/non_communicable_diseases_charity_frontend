document.addEventListener('DOMContentLoaded', () => {
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.body.style.padding = '20px';

  const heading = document.createElement('h1');
  heading.textContent = 'Admin Dashboard – Donations';
  document.body.appendChild(heading);

  const table = document.createElement('table');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.style.marginTop = '20px';

  const headerRow = document.createElement('tr');
  ['Name', 'Amount (KES)'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    th.style.border = '1px solid #ccc';
    th.style.padding = '10px';
    th.style.backgroundColor = '#f5f5f5';
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  const donations = JSON.parse(localStorage.getItem('donations')) || [];

  if (donations.length === 0) {
    const noData = document.createElement('p');
    noData.textContent = 'No donations available.';
    document.body.appendChild(noData);
  } else {
    donations.forEach(({ name, amount }) => {
      const row = document.createElement('tr');

      const nameTd = document.createElement('td');
      nameTd.textContent = name;
      nameTd.style.border = '1px solid #ccc';
      nameTd.style.padding = '10px';

      const amountTd = document.createElement('td');
      amountTd.textContent = amount;
      amountTd.style.border = '1px solid #ccc';
      amountTd.style.padding = '10px';

      row.append(nameTd, amountTd);
      table.appendChild(row);
    });

    document.body.appendChild(table);
  }
});