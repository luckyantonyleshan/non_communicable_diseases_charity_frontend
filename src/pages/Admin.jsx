import React from 'react';
// import '../../styles/App.css';

const Admin = () => {
  const donations = JSON.parse(localStorage.getItem('donations')) || [];

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard – Donations</h1>
      {donations.length === 0 ? (
        <p>No donations available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount (KES)</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, index) => (
              <tr key={index}>
                <td>{donation.name}</td>
                <td>{donation.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;