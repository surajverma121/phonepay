// src/components/PaymentSuccess.js
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import successImage from "../img/payment_success.png"; // Add your success image to `src/assets/`

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const transactionId = new URLSearchParams(location.search).get("transactionId");

  useEffect(() => {
    // Additional actions like logging can be done here
  }, [transactionId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center p-6">
      <img src={successImage} alt="Payment Success" className="w-32 h-32 mb-4" />
      <h2 className="text-3xl font-bold text-green-600 mb-2">Payment Successful!</h2>
      <p className="text-lg text-gray-700 mb-4">Thank you for your payment.</p>
      {transactionId && (
        <p className="text-sm text-gray-500 mb-4">Transaction ID: {transactionId}</p>
      )}
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;
