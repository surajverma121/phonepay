import React from 'react';
import { useNavigate } from 'react-router-dom';


const RegistrationComponent = () => {
  const navigate = useNavigate();

  // Handle the checkout and pass the amount
  const handleCheckout = (amount) => {
   
    navigate('/checkout', { state: { amount } }); // Pass amount to checkout page
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Heading */}
      <h1 className="text-3xl font-bold items-center justify-center text-gray-800 mb-6 border-b-4 border-orange-500  inline-block">Register Now!</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Regular Registration Section */}
        <div className="flex flex-col items-center justify-center bg-blue-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Regular Registration</h2>
          <div className="flex items-center space-x-2 mb-2">
          <span className="text-2xl font-bold text-gray-900 mb-2">₹500</span>
          <span className="text- text-gray-700">/- Only</span>
          </div>

          <button
            onClick={() => handleCheckout(500)}
            className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-md transition duration-300 hover:bg-blue-700"
          >
            Register for ₹500
          </button>
        </div>

        {/* Special Offer Section */}
        {/* <div className="flex flex-col items-center justify-center bg-orange-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Special Offer</h2>
          <p className="text-lg font-semibold text-gray-600 mb-2">
            Open Demat Account and Get ₹200 Off!
          </p>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xl font-semibold line-through text-gray-900">₹500</span>
            <span className="text-3xl font-bold text-orange-500">₹300</span>
            <span className="text-lg text-gray-700">/- Only</span>
          </div>
          <button
            onClick={() => handleCheckout(300)}
            className="px-6 py-3 bg-orange-500 text-white font-semibold text-lg rounded-lg shadow-md transition duration-300 hover:bg-orange-700"
          >
            Register Now for ₹300
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default RegistrationComponent;
