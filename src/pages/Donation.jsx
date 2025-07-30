import { useState, useEffect } from "react";
import DonationForm from "../components/DonationForm";

export default function Donation() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/donations")
      .then((res) => res.json())
      .then((data) => setDonations(data))
      .catch((err) => console.error("Error loading donations:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleDonationSubmit = (newDonation) => {
    setDonations((prev) => [...prev, newDonation]);
  };

  return (
    <div className="container">
      <h1>Support Affected Areas</h1>
      <p>Your contribution can make a difference in the fight against communicable diseases.</p>

      <DonationForm onSubmit={handleDonationSubmit} />

      {loading ? (
        <p>Loading donations...</p>
      ) : (
        <div className="donations-list">
          {donations.length === 0 && <p>No donations yet. Be the first to contribute!</p>}
          {donations.map((donation, index) => (
            <div className="donation-card" key={index}>
              <h3>{donation.area}</h3>
              <p><strong>Amount:</strong> ${donation.amount}</p>
              {donation.message && <p>{donation.message}</p>}
              <small>
                By: {donation.user}{" "}
                {donation.created_at && `on ${donation.created_at}`}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
