import React from 'react';

// Import your local images if needed
// import image from './path/to/your/image.jpg';

const NewFeaturesSection = () => {
  return (
    <section className=" border-orange-500 bg-gray-50 text-black">
      <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold text-center sm:text-5xl">Apprenticeship Program Opportunities</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
            Discover our latest Apprenticeship Programs designed to enhance your skills in MERN stack, Java, and Flutter development.
          </p>
        </div>

        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mt-4 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600">
                    {/* MERN Stack Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-code"
                    >
                      <path d="M5 3l14 9-14 9V3z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">MERN Stack Development</h4>
                  <p className="mt-2">
                    Join our MERN stack internship to gain hands-on experience with MongoDB, Express.js, React, and Node.js, and build full-stack applications.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600">
                    {/* Java Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-code"
                    >
                      <path d="M3 3h18v18H3V3z"></path>
                      <path d="M6 6h12v12H6V6z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Java Development</h4>
                  <p className="mt-2">
                    Gain experience in Java development through our internship program, where you'll work on real-world projects and learn advanced Java concepts.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600">
                    {/* Flutter Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-smartphone"
                    >
                      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                      <path d="M12 18h0"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Flutter Development</h4>
                  <p className="mt-2">
                    Explore mobile app development with Flutter through our internship program, gaining experience in building cross-platform applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              width="600"
              height="600"
                         src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080"
              className="mx-auto rounded-lg shadow-lg"
              alt="Internship Opportunities"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFeaturesSection;
