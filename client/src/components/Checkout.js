import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

const CheckoutPage = () => {
  const location = useLocation();
  const amount = location.state?.amount || 0;
  console.log(amount);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    mobileNumber: "",
    amount: amount,
    transactionID: "",
  });

  console.log(formData);

  // Function to generate a unique, random transaction ID
  const generateTransactionID = () => {
    const timestamp = Date.now(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 1000000); // Generate a random number
    return `TXN${timestamp}${randomNum}`; // Combine them for uniqueness
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Set a unique transaction ID on mount
    setFormData((prevData) => ({
      ...prevData,
      transactionID: generateTransactionID(),
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = async () => {
    const data = {
      name: formData.name,
      mobileNumber: formData.mobileNumber,
      amount: formData.amount,
      transactionID: formData.transactionID,
    };
    console.log(data);

    try {
      console.log("Sending data:", data); // Log request data

      const response = await fetch(
        "https://phone-pe-payment-gateway-integration.vercel.app/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      if (responseData.ok && responseData.url) {
        toast.success("Redirecting to payment page...");
        setTimeout(() => {
          window.location.href = responseData.url; // Redirect to payment page
        }, 2000);
      } else {
        toast.error(responseData.message || "Failed to initiate payment.");
      }
      console.log("Payment response:", responseData); // Log response
      window.location.href = responseData.url;
    } catch (error) {
      console.log("Error in payment:", error);
      // Log additional error details if available
      if (error.response) {
        console.log("Error details:", error.response.data);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      handlePayment();
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 p-6 lg:p-12 bg-gray-100 min-h-screen">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 bg-gray-300 flex items-center justify-center p-4">
        <img
          src="https://img.freepik.com/free-vector/concept-landing-page-credit-card-payment_52683-25532.jpg"
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
            You are registering for the{" "}
            <span className="font-bold">
              Full Stack Development Training Program
            </span>
            .
          </p>
        </div>
        <p className="text-xl text-black mt-1">
          Total Registration Fee: <span className="font-bold">₹ {formData.amount}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
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

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Father's Name
            </label>
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

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
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

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-orange-500 hover:bg-orange-700 focus:shadow-outline focus:outline-none"
          >
            Proceed to Payment
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          <p>
            By confirming your registration, you agree to our{" "}
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
