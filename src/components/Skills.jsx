import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import AWS from "../assets/aws.png";
import Tailwind from "../assets/tailwind.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#cceaf6]">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#1e91d0]">
            Skills
          </p>
          <p className="py-4">These are the technologies I worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[rgba(44,161,225,0.54)] hover:scale-110 duration-500">
            <img src={HTML} alt="html" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[rgba(44,161,225,0.54)] hover:scale-110 duration-500">
            <img src={CSS} alt="html" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[rgba(44,161,225,0.54)] hover:scale-110 duration-500">
            <img src={JavaScript} alt="html" className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[rgba(44,161,225,0.54)] hover:scale-110 duration-500">
            <img src={AWS} alt="html" className="w-20 mx-auto" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[rgba(44,161,225,0.54)] hover:scale-110 duration-500">
            <img src={ReactImg} alt="html" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[rgba(44,161,225,0.54)] hover:scale-110 duration-500">
            <img src={Tailwind} alt="html" className="w-20 mx-auto" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
