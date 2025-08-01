import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { API_BASE_URL, ENDPOINTS } from "../config.js";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

export default function DonationForm({ onSubmit }) {
  const { user } = useAuth();
  const [areaId, setAreaId] = useState("");
  const [caseId, setCaseId] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [areas, setAreas] = useState([]);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}${ENDPOINTS.areas.base}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch areas");
        return res.json();
      })
      .then((data) => setAreas(data))
      .catch((err) => {
        console.error("Failed to fetch areas", err);
        setError("Could not load areas. Please try again.");
      });
  }, []);

  useEffect(() => {
    fetch(`${API_BASE_URL}/cases`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cases");
        return res.json();
      })
      .then((data) => setCases(data))
      .catch((err) => {
        console.error("Failed to fetch cases", err);
        setError("Could not load cases. Please try again.");
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in to make a donation");
      return;
    }

    if (!areaId || !caseId || !amount || Number.parseFloat(amount) <= 0) {
      setError("Please select an area, case, and enter a valid amount");
      return;
    }

    const newDonation = {
      amount: Number.parseFloat(amount),
      donor_name: user.username,
      case_id: parseInt(caseId),
      area_id: parseInt(areaId),
    };

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.donations.base}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(newDonation),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit donation");
      }

      const savedDonation = await response.json();
      onSubmit(savedDonation);

      setAreaId("");
      setCaseId("");
      setAmount("");

      alert("Thank you for your donation! Your contribution makes a difference.");
    } catch (error) {
      console.error(error);
      setError(error instanceof Error ? error.message : "Could not submit donation");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="donation-form">
        <div className="auth-required">
          <p>Please log in to make a donation.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="donation-form">
      <div className="form-header">
        <h2>Make a Donation</h2>
        <p>Your contribution helps fight non-communicable diseases worldwide</p>
      </div>

      <form onSubmit={handleSubmit}>
        {error && <ErrorMessage message={error} />}

        <div className="form-group">
          <label htmlFor="area">Select Affected Area *</label>
          <select
            id="area"
            value={areaId}
            onChange={(e) => setAreaId(e.target.value)}
            disabled={loading || areas.length === 0}
            required
          >
            <option value="">Choose an area to support</option>
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="case">Select Case *</label>
          <select
            id="case"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
            disabled={loading || cases.length === 0}
            required
          >
            <option value="">Choose a case to support</option>
            {cases.map((caseItem) => (
              <option key={caseItem.id} value={caseItem.id}>
                {caseItem.title}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Donation Amount (KES) *</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={loading}
            required
            min="1"
            step="0.01"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary full-width"
          disabled={loading || areas.length === 0 || cases.length === 0}
        >
          {loading ? (
            <>
              <LoadingSpinner size="sm" />
              Processing Donation...
            </>
          ) : (
            `Donate KES ${amount || "0"}`
          )}
        </button>
      </form>
    </div>
  );
}