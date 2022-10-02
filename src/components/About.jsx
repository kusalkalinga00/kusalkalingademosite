import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#cceaf6] text-[#001524]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#1e91d0]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right ">
            <p>
              Hi, I'm Kusal, Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
          <div>
            <p>
              I am passionate about Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Praesentium fuga nesciunt, accusantium soluta
              labore quia. Nostrum provident quod vitae fugit! Architecto
              facilis explicabo expedita placeat ea, doloremque saepe nemo. Non?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
