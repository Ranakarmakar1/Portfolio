import React from "react";
import projects from "../miscellanous/ProjectList";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">



        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">\\ Check out some of my recent work</p>
        </div>

        

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {projects.map((project,index) => (
              <div
              key = {index}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 text-center justify-center items-center">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {project.Project_Title}
                </span>
                <div className="pt-8 text-center">
                  {project.Demo && (<a href={project.Demo} target="_blank"
              rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>)}
                  {project.Code && (<a href={project.Code} target="_blank"
              rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
