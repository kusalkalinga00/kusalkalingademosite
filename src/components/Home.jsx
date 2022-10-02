import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#cceaf6]  ">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#001524]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#003f88]">
          Kusal Kalinga
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#1e91d0]">
          I'm a FrontEnd Developer.
        </h2>
        <p className="text-[#001524] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse
          excepturi, quam debitis est labore consequuntur vitae adipisci beatae,
          delectus error vero quaerat quisquam ipsa eveniet harum quasi nobis!
          Minus accusamus libero, quae ea natus dolores fugit nulla ullam, eius
          eveniet, dicta adipisci quaerat consequatur temporibus cumque dolorem
          excepturi odio?
        </p>
        <div>
          <button className="text-[#001524] group border-2 px-6 py-3 my-2 flex items-center border-[#001524] hover:bg-[#1e91d0]  hover:border-[#1e91d0] hover:text-[#fefdf8]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
