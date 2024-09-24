import React from 'react';

const Home = () => {
  const courses = [
    {
     title: ' Web Development Training(MERN Stack)',
     description: 'Master MongoDB, Express, React, and Node.js with real-world projects and hands-on experience.',
      duration: '6-12 Months',
      mode: 'Online',
    },
    {
     title: 'Flutter Development Training',
    description: 'Learn to build cross-platform mobile apps using Flutter with hands-on projects and real-world experience.',
      duration: '6-12 Months',
      mode: 'Online',
    },
    {
     title: 'Java Development Training',
     description: 'Gain expertise in Java programming, OOP concepts, and build real-world applications through hands-on experience.',
      duration: '6-12 Months',
      mode: 'Online',
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 border-b-4 border-orange-500 inline-block">Our Apprenticeship Program</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg  hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="font-medium">Duration: <span className="text-gray-800">{course.duration}</span></p>
              <p className="font-medium mb-4">Mode: <span className="text-gray-800">{course.mode}</span></p>
              <a href="#" className="inline-block  text-white px-4 py-2 rounded bg-orange-500 hover:bg-orange-700 transition duration-200">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;