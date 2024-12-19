import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS


const Meeting = () => {
  const [formDataGraduate, setFormDataGraduate] = useState({ name: '', mobile: '', email: '' });
  const [formDataUndergraduate, setFormDataUndergraduate] = useState({ name: '', mobile: '', email: '' });


  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'graduate') {
      setFormDataGraduate({ ...formDataGraduate, [name]: value });
    } else {
      setFormDataUndergraduate({ ...formDataUndergraduate, [name]: value });
    }
  };
  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    try {
      const data = formType === 'graduate' ? formDataGraduate : formDataUndergraduate;
      const response = await axios.post('http://localhost:5001/send-email/front', {...data,formType});
      console.log('Email sent:', response.data);
      toast.success('Your form has been successfully submitted!');
      if (formType === 'graduate') {
        setFormDataGraduate({
          name: '', mobile: '', email: ''
        })
      }else{
        setFormDataUndergraduate({
          name: '', mobile: '', email: ''
        })
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send the form. Please try again.');
    }
  };
  return (
    <div className="bg-gray-50 text-black py-10 px-5 ">
    <h1 className="text-center text-orange-500 text-3xl font-bold mb-8">
      Free Apprenticeship Programme
    </h1>
    <p className="text-center text-md mb-6">
    <h2 className='text-lg'> Students interested in the free apprenticeship programme must first attend a Google Meeting. Attendance is compulsory to join the programme.<br/></h2>

   <span className='font-semibold  '>Important Note:   </span>
    <br/> Please ensure you attend the meeting as part of the mandatory process before registration.
    </p>

  <div className='flex flex-col md:flex-row items-center justify-around gap-10 mx-10'>
      {/* For Graduates Section */}
      <div className="bg-gray-300 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">For Graduates</h2>
      <p className="mb-2 text-center">
        Timing: <span className="font-bold">Every Saturday, 7-8 PM</span>
      </p>
      <p className="mb-4 text-center">
        Meeting Link:{" "}
        <a
          href="https://meet.google.com/upe-wpph-tpe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          https://meet.google.com/upe-wpph-tpe
        </a>
      </p>
      <form className="space-y-4" onSubmit={(e) => handleSubmit(e, 'graduate')}>
        <input
          type="text"
          name='name'
           id="name"
          placeholder="Name"
          className="w-full px-4 py-2 bg-gray-100 text-black rounded focus:outline-none"
          value={formDataGraduate.name}
          onChange={(e) => handleInputChange(e, 'graduate')}

        />
        <input
          type="tel"
           name="mobile"
           id="mobile"
          placeholder="Mobile Number"
          className="w-full px-4 py-2 bg-gray-100 text-black rounded focus:outline-none"
          value={formDataGraduate.mobile}
          onChange={(e) => handleInputChange(e, 'graduate')}

        />
        <input
          type="email"
           name="email"
           id="email"
          placeholder="Email ID"
          className="w-full px-4 py-2 bg-gray-100 text-black rounded focus:outline-none"
          value={formDataGraduate.email}
          onChange={(e) => handleInputChange(e, 'graduate')}

        />
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
        >
          Confirm Attendance
        </button>
      </form>
    </div>

    {/* For Undergraduates Section */}
    <div className="bg-gray-300 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">For Undergraduates</h2>
      <p className="mb-2 text-center">
        Timing: <span className="font-bold">Every Friday, 7-8 PM</span>
      </p>
      <p className="mb-4 text-center">
        Meeting Link:{" "}
        <a
          href="https://meet.google.com/hmr-jjfb-bzv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          https://meet.google.com/hmr-jjfb-bzv
        </a>
      </p>
      <form className="space-y-4" onSubmit={(e) => handleSubmit(e, 'undergraduate')}>
        <input
          type="text"
           name="name"
            id="name"
             autocomplete="name"
          placeholder="Name"
          className="w-full px-4 py-2 bg-gray-100 text-black rounded focus:outline-none"
          value={formDataUndergraduate.name}
          onChange={(e) => handleInputChange(e, 'undergraduate')}
        />
        <input
          type="tel"
           name="mobile"
            id="mobile"
             autocomplete="tel"
          placeholder="Mobile Number"
          className="w-full px-4 py-2 bg-gray-100 text-black rounded focus:outline-none"
          value={formDataUndergraduate.mobile}
          onChange={(e) => handleInputChange(e, 'undergraduate')}
        />
        <input
          type="email"
           name="email"
           id="email"
  autocomplete="email"
          placeholder="Email ID"
          className="w-full px-4 py-2 bg-gray-100 text-black rounded focus:outline-none"
          value={formDataUndergraduate.email}
          onChange={(e) => handleInputChange(e, 'undergraduate')}
        />
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
        >
          Confirm Attendance
        </button>
      </form>
    </div>
  </div>

    <ToastContainer />
  </div>
  )
}

export default Meeting
