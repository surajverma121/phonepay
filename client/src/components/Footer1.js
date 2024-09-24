import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-900 text-white">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 text-center sm:text-left">
          <Link
            to="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center justify-center sm:justify-start"
          >
            <svg
              className="w-8 text-orange-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-orange-400 uppercase">
              Black Grapes Softech
            </span>
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
              Black Grapes Softech offers dynamic internships to empower future 
              tech leaders with hands-on experience in cutting-edge technologies.
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-center sm:text-left">
          <p className="text-base font-bold tracking-wide text-orange-400">Contacts</p>
          <div className="flex justify-center sm:justify-start">
            <p className="mr-1 text-white">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-orange-400 hover:text-orange-600"
            >
              6269414463, 9109913534, 8717854689
            </a>
          </div>
          <div className="flex justify-center sm:justify-start">
            <p className="mr-1 text-white">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-orange-400 hover:text-orange-600"
            >
              hr.blackgrapesgroup1@gmail.com, hr.blackgrapesgroup2@gmail.com
            </a>
          </div>
          <div className="flex justify-center sm:justify-start">
            <p className="mr-1 text-white">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-orange-400 hover:text-orange-600"
            >
              252-F/H, Scheme No 54, Vijay Nagar, Indore, Madhya Pradesh 452010, India
            </a>
          </div>
        </div>
        
        <div className="text-center sm:text-left">
          <p className="text-base font-bold tracking-wide text-orange-400">Links</p>
          <br />
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/terms-conditions"
                className="text-gray-500 transition-colors duration-300 hover:text-orange-400"
              >
                Site Policies
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-gray-500 transition-colors duration-300 hover:text-orange-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="text-gray-500 transition-colors duration-300 hover:text-orange-400"
              >
                Terms & Conditions
              </Link>
            </li>
         
          </ul>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-800 lg:flex-row">
        <p className="text-sm text-gray-500 text-center lg:text-left">
          © Black Grapes Softech
        </p>
      </div>
    </div>
  );
};