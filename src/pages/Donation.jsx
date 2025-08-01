import { useState, useEffect } from "react";
import DonationForm from "../components/DonationForm";
import { API_BASE_URL, ENDPOINTS } from "../config.js";

export default function Donation() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}${ENDPOINTS.donations.base}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch donations");
        return res.json();
      })
      .then((data) => {
        setDonations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading donations:", err);
        setError("Could not load donations. Please try again.");
        setLoading(false);
      });
  }, []);

  const handleDonationSubmit = (newDonation) => {
    setDonations((prev) => [...prev, newDonation]);
  };

  return (
    <div className="container">
      <h1>Support Affected Areas</h1>
      <p>Your contribution can make a difference in the fight against non-communicable diseases.</p>

      <DonationForm onSubmit={handleDonationSubmit} />

      {loading ? (
        <p>Loading donations...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="donations-list">
          {donations.length === 0 && <p>No donations yet. Be the first to contribute!</p>}
          {donations.map((donation, index) => (
            <div className="donation-card" key={index}>
              <h3>Case ID: {donation.case_id}</h3>
              <p><strong>Amount:</strong> KES {donation.amount}</p>
              <p><strong>Area ID:</strong> {donation.area_id}</p>
              <small>
                By: {donation.donor_name}{" "}
                {donation.created_at && `on ${donation.created_at}`}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}