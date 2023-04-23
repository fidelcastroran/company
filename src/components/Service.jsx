import React from "react";
import projects1 from '../assets/istockphoto-178536404-612x612.jpg'
import projects2 from '../assets/download.jpeg'
import projects3 from '../assets/images.jpeg'
const Service = () => {
  const portfolios = [
    {
      id: 1,
      src:projects1,
      demo:"project1",
      
    },
    {
      id: 2,
      src:projects2,
      demo:"project2",
    
    },
    {
      id: 3,
      src:projects3,
      demo:"project3",
    },
 
  ];  

  return (
    <div
    name="services"
    className="bg-gradient-to-b from-blue-300 to-blue-200 w-full text-black md:h-screen ">
    <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full ">
      <div className="pb-8  pt-16">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Services
        </p>
        <p className="py-6">Check out some of our work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 max-w-screen-lg mx-auto">
  {portfolios.map(({ id, src,demo }) => (
    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
      <img
        src={src}
        alt=""
        className="rounded-md duration-200 hover:scale-105 object-cover w-full h-64 sm:h-auto"
      />
      <div className="flex items-center justify-center">
        <a
          className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-black"
          target="_blank"
          rel="noreferrer"
        >
          {demo}
        </a>
      </div>
    </div>
  ))}
</div>

    </div>
  </div>
);
};


export default Service;