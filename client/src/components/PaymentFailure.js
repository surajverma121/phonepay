// src/components/PaymentFailure.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import failureImage from "../img/payment_failure.png"; // Add your failure image to `src/assets/`

const PaymentFailure = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const transactionId = new URLSearchParams(location.search).get("transactionId");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-center p-6">
      <img src={failureImage} alt="Payment Failed" className=" w-48 h-full mb-4" />
      <h2 className="text-3xl font-bold text-red-600 mb-2">Payment Failed</h2>
      <p className="text-lg text-gray-700 mb-4">Unfortunately, your payment could not be processed.</p>
      {transactionId && (
        <p className="text-sm text-gray-500 mb-4">Transaction ID: {transactionId}</p>
      )}
      <p className="text-gray-700 mb-4">Please try again or contact support if the issue persists.</p>
      <button
        onClick={() => navigate("/checkout")}
        className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
      >
        Retry Payment
      </button>
    </div>
  );
};

export default PaymentFailure;
