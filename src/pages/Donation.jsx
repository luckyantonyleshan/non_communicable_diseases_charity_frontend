document.addEventListener('DOMContentLoaded', () => {
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.body.style.padding = '20px';

  const heading = document.createElement('h1');
  heading.textContent = 'Donate to Support NCD Awareness';
  document.body.appendChild(heading);

  const nameInput = document.createElement('input');
  nameInput.placeholder = 'Your Name';
  nameInput.id = 'name';
  nameInput.style.display = 'block';
  nameInput.style.margin = '10px 0';
  nameInput.style.padding = '10px';

  const amountInput = document.createElement('input');
  amountInput.placeholder = 'Amount in KES';
  amountInput.type = 'number';
  amountInput.id = 'amount';
  amountInput.style.display = 'block';
  amountInput.style.margin = '10px 0';
  amountInput.style.padding = '10px';

  const donateBtn = document.createElement('button');
  donateBtn.textContent = 'Donate';
  donateBtn.style.padding = '10px 20px';

  const message = document.createElement('div');
  message.id = 'message';
  message.style.marginTop = '15px';
  message.style.fontWeight = 'bold';

  document.body.append(nameInput, amountInput, donateBtn, message);

  donateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (!name || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid name and amount.');
      return;
    }

    const donations = JSON.parse(localStorage.getItem('donations')) || [];
    donations.push({ name, amount });
    localStorage.setItem('donations', JSON.stringify(donations));

    message.textContent = `🎉 Thank you, ${name}, for donating KES ${amount}!`;

    nameInput.value = '';
    amountInput.value = '';
  });
});