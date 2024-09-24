export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
    <h2 className="text-2xl  text-center font-bold text-gray-900 mb-10 ">"Why Choose Our Practical Training Program?"</h2>
      <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {/* Feature 1 - Online Classes */}
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-orange-300 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Online Classes
          </h6>
          <div className="mb-2 text-gray-700">
            Access classes anytime, anywhere.
          </div>
        </div>

        {/* Feature 2 - Flexible Timing */}
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-orange-300 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Flexible Timing
          </h6>
          <div className="mb-2 text-gray-700">
            Learn at your own pace.
          </div>
        </div>

        {/* Feature 3 - Free Classes */}
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-orange-300 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Free Classes
          </h6>
          <div className="mb-2 text-gray-700">
            Start your journey with free sessions.
          </div>
        </div>

        {/* Feature 4 - 1 Year Complete Program */}
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-orange-300 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
             6-12 months Complete Program
          </h6>
          <div className="mb-2 text-gray-700">
            Comprehensive 12-month curriculum.
          </div>
        </div>

        {/* Feature 5 - 2 Certificates (Govt + Comp) */}
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-orange-300 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            2 Certificates
          </h6>
          <div className="mb-2 text-gray-700">
            Government & company certified.
          </div>
        </div>
      </div>
    </div>
  );
};
