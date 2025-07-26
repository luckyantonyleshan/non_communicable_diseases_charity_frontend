// pages/Donation.jsx
import React, { useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import apiService from "../../services/apiService";
import '../styles/App.css';


const Donation = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    donor_name: user?.username || '',
    amount: '',
    message: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.createDonation({
        amount: parseFloat(formData.amount),
        donor_name: formData.donor_name,
        message: formData.message
      });
      setMessage(`Thank you for your donation of KES ${formData.amount}!`);
      setFormData({ ...formData, amount: '' });
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div className="donation-page">
      <h1>Donate to Support NCD Awareness</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="donor_name"
          value={formData.donor_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount in KES"
          min="1"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Optional message"
        />
        <button type="submit">Donate</button>
      </form>
      {message && <div className="donation-message">{message}</div>}
    </div>
  );
};

export default Donation;