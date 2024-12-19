import React from "react";
import image1 from '../../img/angel1.jpg'
import image2 from '../../img/angel2.jpeg'


const Demat = () => {
  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Open Your Demat Account
      </h2>
      
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        {/* App Section */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={image1} // Replace with the actual path of the QR code image for the app
            alt="QR Code for App"
            className="w-72 h-72 mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Open via Mobile App
            </h3>
            <p className="text-gray-600 mb-4">
              Scan the QR code or click the button below to open your Demat account via the Angel One app.
            </p>
            <a
              href="https://angel-one.onelink.me/Wjgr/77tel5xp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 Click here to Open in App
              </button>
            </a>
          </div>
        </div>
        
        {/* Web Section */}
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={image2}// Replace with the actual path of the QR code image for the web
            alt="QR Code for Web"
            className="w-72 h-72 mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
             Open via Web
            </h3>
            <p className="text-gray-600 mb-4">
              Scan the QR code or click the button below to open your Demat account via the web.
            </p>
            <a
              href="https://a.aonelink.in/ANGOne/XqMmanp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Click here to Open on Web
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demat;
