import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  // Add fields: name, fatherName, email, mobile
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    email: '',
    mobile: '',
  });

  useEffect(() => {
    // Scroll to the top of the page when this component is loaded
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate payment gateway redirection for registration
    window.location.href = `https://example-payment-gateway.com/pay?amount=500&name=${formData.name}&fatherName=${formData.fatherName}&email=${formData.email}&mobile=${formData.mobile}`;
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 p-6 lg:p-12 bg-gray-100 min-h-screen">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 bg-gray-300 flex items-center justify-center p-4">
        <img
          src="https://img.freepik.com/free-vector/concept-landing-page-credit-card-payment_52683-25532.jpg?t=st=1727073028~exp=1727076628~hmac=4a99d55b0e3b0fe45496ea2917dc7c263b8ef4c8d76fe797623331cdebb10193&w=740"
          alt="Checkout"
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Registration Form Section */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Confirm Your Training Program Registration
        </h1>
        <div className="bg-blue-100 p-4 rounded-lg mb-4 text-blue-800">
          <p className="text-lg font-semibold">
            You are registering for the{' '}
            <span className="font-bold">Full Stack Development Training Program</span>.
          </p>
        </div>
        <p className="text-xl text-black mt-1">
          Total Registration Fee: <span className="font-bold">₹500</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Father's Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your father's name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Mobile Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-orange-500 hover:bg-orange-700 focus:shadow-outline focus:outline-none"
          >
            Proceed to Payment
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          <p>
            By confirming your registration, you agree to our{' '}
            <Link to="/terms-conditions" className="text-blue-600 underline">
              terms and conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
