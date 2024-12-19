import React, { useState, useEffect } from "react";
import Demat from "./steps/Demat";
import Enquiry from "./steps/Enquiry";
import CheckOut from "./Checkout";

const MultiForm = () => {
 

  const [currentPage, setCurrentPage] = useState(1);
  const [isApproved, setIsApproved] = useState(false); // To track approval status
  
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000"); // WebSocket server URL

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Received message:", message);

      if (message.action === "approved") {
        
        alert("Your request has been approved! You can now proceed to the next step.");
      } else if (message.action === "rejected") {
        setIsApproved(false);
        alert("Your request has been rejected. Please contact support.");
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    return () => {
      socket.close();
    };
  }, []);

  

  const nextPage = () => {
    // Prevent navigation to the 3rd page unless approved
    if (currentPage === 2 && !isApproved) {
      alert("You cannot proceed to the next step until approved.");
      return;
    }
    if (currentPage < 3) setCurrentPage(currentPage + 1);
    window.scrollTo({top:0,behavior:'smooth'});
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
     window.scrollTo({top:0,behavior:'smooth'});
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      {/* Progress Indicators */}
      <div className="flex justify-center items-center pb-6  ">
        <div className="flex space-x-6 ">
          <span 
            className={`px-4 py-2 cursor-pointer rounded-full ${
              currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </span>
          <span 
            className={`px-4 py-2  cursor-pointer rounded-full ${
              currentPage === 2 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </span>
          <span
            className={`px-4 py-2 rounded-full ${
              currentPage === 3 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
            }`}
          >
            3
          </span>
        </div>
        {/* <span className="text-lg font-semibold">Step {currentPage} of 3</span> */}
      </div>

      {/* Page Content */}
      {currentPage === 1 && <Demat />}
      {currentPage === 2 && <Enquiry />}
      {currentPage === 3 && <CheckOut />}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevPage}
          className="bg-gray-500 text-white px-6 py-2 rounded-md"
          disabled={currentPage === 1} // Disable on the first page
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className={`${
            currentPage === 3 ? "bg-green-500" : "bg-blue-500"
          } text-white px-6 py-2 rounded-md`}
        >
          {currentPage === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default MultiForm;
