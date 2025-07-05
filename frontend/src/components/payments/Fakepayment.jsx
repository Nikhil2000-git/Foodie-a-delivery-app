// src/pages/FakePayment.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FakePayment.css";

const FakePayment = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("");

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method!");
      return;
    }
    alert(`Payment via ${method} was successful!`);
    navigate("/"); // Redirect to homepage after payment
  };

  return (
    <div className="payment-container">
      <h2>Choose Payment Method</h2>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            name="payment"
            value="UPI"
            onChange={(e) => setMethod(e.target.value)}
          />
          UPI (Google Pay, PhonePe)
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="Card"
            onChange={(e) => setMethod(e.target.value)}
          />
          Credit / Debit Card
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="Net Banking"
            onChange={(e) => setMethod(e.target.value)}
          />
          Net Banking
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="COD"
            onChange={(e) => setMethod(e.target.value)}
          />
          Cash on Delivery (COD)
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="QR Code"
            onChange={(e) => setMethod(e.target.value)}
          />
          QR Code (Scan to Pay)
        </label>
      </div>

      {method === "QR Code" && (
        <div className="qr-section">
          <p>Scan this QR Code:</p>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay"
            alt="QR Code"
          />
        </div>
      )}

      <div className="payment-buttons">
        <button onClick={handlePayment}>Pay Now</button>
        <button onClick={() => navigate("/cart")} className="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FakePayment;
