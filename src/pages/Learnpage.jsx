document.addEventListener('DOMContentLoaded', () => {
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.body.style.padding = '40px';

  const title = document.createElement('h1');
  title.textContent = 'Learn About Non-Communicable Diseases';
  document.body.appendChild(title);

  const diseases = [
    { name: 'Diabetes', info: 'Chronic condition affecting blood sugar regulation.' },
    { name: 'Cancer', info: 'Uncontrolled growth of abnormal cells.' },
    { name: 'Heart Disease', info: 'Conditions affecting the heart and blood vessels.' },
    { name: 'Chronic Respiratory Diseases', info: 'Long-term diseases of the airways and lungs.' }
  ];

  diseases.forEach(disease => {
    const card = document.createElement('div');
    card.style.border = '1px solid #ccc';
    card.style.padding = '15px';
    card.style.margin = '10px 0';
    card.style.borderRadius = '8px';

    const h2 = document.createElement('h2');
    h2.textContent = disease.name;
    const p = document.createElement('p');
    p.textContent = disease.info;

    card.appendChild(h2);
    card.appendChild(p);
    document.body.appendChild(card);
  });
});



