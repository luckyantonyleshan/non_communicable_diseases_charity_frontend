import React, { useState } from 'react';
// import '../../styles/App.css';

const Donation = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid name and amount.');
      return;
    }
    const donations = JSON.parse(localStorage.getItem('donations')) || [];
    donations.push({ name, amount });
    localStorage.setItem('donations', JSON.stringify(donations));
    setMessage(`🎉 Thank you, ${name}, for donating KES ${amount}!`);
    setName('');
    setAmount('');
  };

  return (
    <div className="donation-page">
      <h1>Donate to Support NCD Awareness</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        placeholder="Amount in KES"
      />
      <button onClick={handleSubmit}>Donate</button>
      {message && <div className="donation-message">{message}</div>}
    </div>
  );
};

export default Donation;