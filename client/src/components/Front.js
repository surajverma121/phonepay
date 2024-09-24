export const Front = ({scrollToButton}) => {
    return (
      <div className="relative flex flex-col-reverse py-16 lg:py-10 lg:flex-col">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-10 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
            Software
            <br className=" text-orange-500" />  
           Training Program
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
          Specially Designed for The Students who Are Looking For UpGrade Their Skills
          </p>
          <h6 className="mb-5 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none md:text-center">
            Limited Seats Available – Act Now!
          </h6>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            Join our exclusive training program and gain hands-on experience with industry-leading tools and techniques.
          </p>
          <div className="mb-5 text-center md:mb-5 lg:mb-0">
            <button
              onClick={scrollToButton}
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-orange-500 hover:bg-orange-700 focus:shadow-outline focus:outline-none"
            >
              Register Now – Limited Seats!
            </button>
          </div>
        </div>
      </div>
      <div className="inset-y-0 top-5 right-0 w-full max-w-xl px-4 mx-auto mb-0 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-120"
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
    );
  };




  