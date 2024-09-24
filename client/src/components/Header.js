import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Nav = ({
  scrollToHome,
  scrollToTraining,
  scrollToCourses,
  scrollToAbout,
  scrollToContact,
  scrollToButton
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // const handleRegistrationClick = () => {
  //   window.location.href =
  //     "https://docs.google.com/forms/d/1rcg53WttmP_-iMYPSmZ4lxXHdAe7bcgcV_P0nv17s6A/edit?ts=66d5a18b";
  // };

  const handleEnquiryClick = () => {
    navigate("/enquiry"); 
    setIsMenuOpen(false);// Use react-router-dom's useNavigate to programmatically navigate
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };  
  const handleMenuItemClick = (scrollFunction ) => {
    scrollFunction();
    setIsMenuOpen(false); // Close the mobile menu after clicking
  };

  return (
    <div className="bg-gray-900 sticky top-0 z-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <div
            className="inline-flex items-center cursor-pointer"
            onClick={() => handleMenuItemClick(scrollToHome)}
          >
            <svg
              className="w-8 text-orange-400"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              Black{" "}
              <span className="ml-2 text-xl font-bold tracking-wide text-orange-400 uppercase">
                Grapes Softech
              </span>
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <span
                onClick={() => handleMenuItemClick(scrollToTraining)}
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer"
              >
                Free Training Program
              </span>
            </li>
            <li>
              <span
                onClick={() => handleMenuItemClick(scrollToCourses)}
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer"
              >
                Courses Offered
              </span>
            </li>
            <li>
              <span
                onClick={() => handleMenuItemClick(scrollToAbout)}
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer"
              >
                About Us
              </span>
            </li>
            <li>
              <span
                onClick={() => handleMenuItemClick(scrollToContact)}
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer"
              >
                Contact Us
              </span>
            </li>
            <li>
              <span
                onClick={handleEnquiryClick}
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer"
              >
                Enquiry
              </span>
            </li>
          </ul>

          {/* Register Button */}
          <ul className="flex items-center hidden space-x-6 lg:flex">
            <li>
              <button
                onClick={() => handleMenuItemClick(scrollToButton)}
                className="inline-flex items-center justify-center h-8 py-2 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-400 hover:bg-orange-600 focus:shadow-outline focus:outline-none"
              >
                Register Here
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              aria-label="Toggle Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className={`w-6 h-6 ${
                  isMenuOpen ? "text-orange-400" : "text-white"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="mt-4 space-y-4 lg:hidden">
            <li>
              <span
                onClick={() => handleMenuItemClick(scrollToTraining)}
                className="block font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer"
              >
                Free Training Program
              </span>
            </li>
            <li>
              <span
                onClick={() => handleMenuItemClick(scrollToCourses)}
                className="block font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer"
              >
                Courses Offered
              </span>
            </li>
            <li>
              <span
                onClick={() => handleMenuItemClick(scrollToAbout)}
                className="block font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer"
              >
                About Us
              </span>
            </li>
            <li>
              <span
                onClick={() => handleMenuItemClick(scrollToContact)}
                className="block font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer"
              >
                Contact Us
              </span>
            </li>
            <li>
              <span
                onClick={handleEnquiryClick}
                className="block font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer"
              >
                Enquiry
              </span>
            </li>
            <li>
              <button
               onClick={() => handleMenuItemClick(scrollToButton)}
                className="w-full inline-flex items-center justify-center h-8 py-2 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-400 hover:bg-orange-600 focus:shadow-outline focus:outline-none"
              >
                Register Here
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
