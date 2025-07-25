import React, { useState } from 'react';
// import '../../styles/App.css';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation submitted:', formData);
    alert(`Thank you for your donation of KES ${formData.amount}!`);
    setFormData({
      name: '',
      email: '',
      amount: '',
      message: ''
    });
  };

  return (
    <div className="donation-form">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          Amount (KES):
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            min="100"
            required
          />
        </label>
        
        <label>
          Message (Optional):
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        
        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
};

export default DonationForm;