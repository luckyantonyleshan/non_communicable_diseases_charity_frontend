import React, { useState } from 'react';
import './App.css'; 

export default function DonationForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', form);
    alert('Thank you for your donation!');
    setForm({ username: '', email: '', amount: '' });
  };

  return (
    <div className="donation-container">
      <h2 className="donation-heading">Support the Fight Against NCDs</h2>
      <form onSubmit={handleSubmit} className="donation-form">
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          required
          className="donation-input"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="donation-input"
        />
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Donation Amount (USD)"
          required
          className="donation-input"
        />
        <button type="submit" className="donation-button">
          Donate Now
        </button>
      </form>
    </div>
  );
}
