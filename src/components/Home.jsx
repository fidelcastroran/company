import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import image from '../assets/photo-1599732596061-1f381074f115.jpeg'
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b  from-blue-300 to-blue-200"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mr-3 pl-5 w-full">
        <p className="text-gray-500 py-4 max-w-md">
          
          </p>
          <h2 className="text-4xl sm:text-4xl font-bold text-white ">
          Demolition Co.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          We provide professional and safe demolition services for large and small buildings.

          </p>

          <div>
            <Link
              to="services"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
            Service
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={image}
            alt="generic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;