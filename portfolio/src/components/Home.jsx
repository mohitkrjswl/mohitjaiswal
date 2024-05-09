import React from "react";
import HeroImage from "../assets/logo2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h4 className='font-bold text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>Hello, I'm</h4>
          <h1 className=' text-white font-extrabold text-[30px]'>Mohit Kumar Jaiswal</h1>

          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack  <span className='bg-clip-text text-transparent bg-gradient-to-r
          from-blue-500 to-purple-700'>Developer</span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-2/3 sm:w-3/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;