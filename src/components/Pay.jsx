import React, { useState } from "react";

const Pay = ({ setCartItems }) => {
  const [submitted, setSubmitted] = useState(false);

  const buttonStyle = {
    background: "#fff8f2",
    color: "#a57b63",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    border: "1px solid #a57b63",
    width: "100%",
    marginTop: "1rem",
  };

  const cardStyle = {
    backgroundColor: "#fff8f2",
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "1.5rem",
    width: "350px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  };

  const labelStyle = {
    minWidth: "120px",
    color: "#a57b63",
    fontWeight: "bold",
    fontSize: "0.9rem",
  };

  const inputStyle = {
    flex: 1,
    padding: "0.4rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setCartItems([]); // ✅ إفراغ السلة بعد الدفع
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-4 mb-4">
      <div style={cardStyle}>
        {!submitted ? (
          <>
            <h2 className="text-xl font-bold mb-6 text-center text-[#a57b63]">
              Payment Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={rowStyle}>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  style={inputStyle}
                  required
                />
              </div>
              <div style={rowStyle}>
                <label style={labelStyle}>Card Number</label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9\s]{13,19}"
                  placeholder="1234 5678 9012 3456"
                  style={inputStyle}
                  required
                />
              </div>
              <div style={rowStyle}>
                <label style={labelStyle}>Expiry</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  style={inputStyle}
                  required
                />
              </div>
              <div style={rowStyle}>
                <label style={labelStyle}>CVV</label>
                <input
                  type="password"
                  inputMode="numeric"
                  pattern="\d{3,4}"
                  placeholder="123"
                  style={inputStyle}
                  required
                />
              </div>
              <button type="submit" style={buttonStyle}>
                Confirm Payment
              </button>
            </form>
          </>
        ) : (
          <div className="text-center text-[#a57b63]">
            <h2 className="text-xl font-bold mb-2">Payment Successful!</h2>
            <p>Thank you for your order.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pay;
