import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const FormModal = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    gender: '',
    batch: '',
    stream: '',
    collegeName: '',
    address: '',
    whatsappNumber: '',
    email: '', // User's email
    aadharCard: null,
    panCard: null,
    graduationMarksheet: null,
    passportSizePhoto: null,
    updatedResume: null,
    paymentMode: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        form.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setFormData({
          fullName: '',
          fatherName: '',
          gender: '',
          batch: '',
          stream: '',
          collegeName: '',
          address: '',
          whatsappNumber: '',
          email: '',
          aadharCard: null,
          panCard: null,
          graduationMarksheet: null,
          passportSizePhoto: null,
          updatedResume: null,
          paymentMode: '',
        });
        setMessage('Form submitted successfully!');
      } else {
        // Show error message
        setMessage('Error submitting form');
      }
    } catch (error) {
      alert('Error submitting form');
    }
  };
  return (
  
    <div className="bg-gray-50 py-12 min-h-screen">
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
       Student Details Page
      </h2>
  
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
  
          {/* Father's Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Father's Name</label>
            <input 
              type="text" 
              name="fatherName" 
              value={formData.fatherName} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
  
          {/* Gender */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Gender</label>
            <select 
              name="gender" 
              value={formData.gender} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
  
          {/* Batch */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Batch</label>
            <input 
              type="text" 
              name="batch" 
              value={formData.batch} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
  
          {/* Stream */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Stream</label>
            <select 
              name="stream" 
              value={formData.stream} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            >
              <option value="">Select</option>
              <option value="BSC">BSC</option>
              <option value="MSC">MSC</option>
              <option value="BE">BE</option>
              <option value="BTECH">BTECH</option>
            </select>
          </div>
  
          {/* College Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">College Name</label>
            <input 
              type="text" 
              name="collegeName" 
              value={formData.collegeName} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
  
          {/* Address */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-600">Address</label>
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
  
          {/* WhatsApp Number */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">WhatsApp Number</label>
            <input 
              type="text" 
              name="whatsappNumber" 
              value={formData.whatsappNumber} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
  
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
  
          {/* Aadhar Card Upload */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-600">Aadhar Card (Upload)</label>
            <input 
              type="file" 
              name="aadharCard" 
              onChange={handleFileChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm" 
              required 
            />
          </div>
  
          {/* PAN Card Upload */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-600">PAN Card (Upload)</label>
            <input 
              type="file" 
              name="panCard" 
              onChange={handleFileChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm" 
              required 
            />
          </div>
  
          {/* Last-Year Graduation Marksheet Upload */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-600">Last-Year Graduation Marksheet (Upload)</label>
            <input 
              type="file" 
              name="graduationMarksheet" 
              onChange={handleFileChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm" 
              required 
            />
          </div>
  
          {/* Passport Size Photo Upload */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-600">Passport Size Photo (Upload)</label>
            <input 
              type="file" 
              name="passportSizePhoto" 
              onChange={handleFileChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm" 
              required 
            />
          </div>
  
          {/* Updated Resume Upload */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-600">Updated Resume (Upload)</label>
            <input 
              type="file" 
              name="updatedResume" 
              onChange={handleFileChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm" 
              required 
            />
          </div>
  
          {/* Payment Mode */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-600">Payment Mode</label>
            <select 
              name="paymentMode" 
              value={formData.paymentMode} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            >
              <option value="">Select</option>
              <option value="Cash">Cash</option>
              <option value="Online Payment/UPI">Online Payment/UPI</option>
            </select>
          </div>
        </div>
  
        <div className="mt-6">
          <button 
            type="submit" 
            className=" w-full px-6 py-3 bg-orange-500 text-white font-semibold text-lg rounded-lg shadow-md transition duration-300 hover:bg-orange-700"
          >
            Submit
          </button>
          {message && (
            <p className="mt-4 text-center text-green-600 font-semibold">
              {message}
            </p>
          )}
        </div>
      </form>
    </div>
  </div>


  );
};

export default FormModal;
