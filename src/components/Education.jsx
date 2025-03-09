import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) in Electrical Engineering",
      institution: "Institute of Engineering & Management (IEM), Kolkata",
      year: "2021 - 2025",
      percentage: "8.79",
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Barjora High School",
      year: "2018 - 2020",
      percentage: "88.4%",
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Barjora High School",
      year: "2018",
      percentage: "86%",
    },
  ];

  return (
    <div name="education" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Education
          </p>
          <p className="py-4">\\ My academic background</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 text-center py-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-6 rounded-lg"
            >
              <h2 className="text-xl font-bold">{edu.degree}</h2>
              <p className="text-lg mt-2">{edu.institution}</p>
              <p className="text-md mt-1 text-gray-400">{edu.year}</p>
              <p className="text-md mt-1 text-gray-400">Percentage: {edu.percentage}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Education;
