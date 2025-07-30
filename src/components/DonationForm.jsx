import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const AREA_OPTIONS = [
  "Nairobi, Kenya",
  "Kinshasa, DRC",
  "Dhaka, Bangladesh",
  "Lagos, Nigeria",
  "Karachi, Pakistan",
  "Mumbai, India",
];

export default function DonationForm({ onSubmit }) {
  const { user } = useAuth();
  const [area, setArea] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to make a donation");
      return;
    }

    const newDonation = {
      area,
      amount: parseFloat(amount),
      message,
      user: user.username,
    };

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(newDonation),
      });

      if (!response.ok) throw new Error("Failed to submit donation");

      const savedDonation = await response.json();
      onSubmit(savedDonation);
      setArea("");
      setAmount("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Could not submit donation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <h2>Make a Donation</h2>

      <select value={area} onChange={(e) => setArea(e.target.value)} required>
        <option value="">Select an affected area</option>
        {AREA_OPTIONS.map((areaOption, index) => (
          <option key={index} value={areaOption}>
            {areaOption}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Donation Amount (KES)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        min="1"
      />

      <textarea
        placeholder="Message (optional)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Donate"}
      </button>
    </form>
  );
}
