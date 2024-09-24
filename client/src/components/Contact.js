import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-10 lg:px-16">
          {/* Section Heading */}
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-4 border-orange-600 inline-block">Visit Our Location</h2>
            <p className="mt-2 text-md text-gray-800">
              We are located in the heart of the city. Drop by to say hello or to discuss how we can assist you.
            </p>
          </div>

          {/* Main Content */}
          <div className="mt-6 lg:mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-8">
              {/* Map Section */}
              <div className="rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58868.91003172628!2d75.887491!3d22.75399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630310c76a0dc5%3A0xf446e40a939f4b1d!2sBlack%20Grapes%20Softech!5e0!3m2!1sen!2sus!4v1726475498805!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>

              {/* Information Section */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Address Section */}
                <div className="px-6 py-4">
                  <h3 className="text-xl font-semibold text-black">Our Address</h3>
                  <p className="mt-2 text-sm text-orange-600">123 Main St, San Francisco, CA 94105</p>
                </div>

                {/* Divider */}
                <hr className="border-gray-200" />

                {/* Hours Section */}
                <div className="px-6 py-4">
                  <h3 className="text-xl font-semibold text-black">Office Hours</h3>
                  <p className="mt-2 text-sm text-gray-700">Monday - Friday: 9am - 5pm</p>
                  <p className="mt-1 text-sm text-gray-700">Saturday: 10am - 4pm</p>
                  <p className="mt-1 text-sm text-gray-700">Sunday: Closed</p>
                </div>

                {/* Divider */}
                <hr className="border-gray-200" />

                {/* Contact Section */}
                <div className="px-6 py-4">
                  <h3 className="text-xl font-semibold text-black">Get in Touch</h3>
                  <p className="mt-2 text-sm text-orange-600">Email: info@example.com</p>
                  <p className="mt-1 text-sm text-orange-600">Phone: +1 23494 34993</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
