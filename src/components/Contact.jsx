import React from "react";

function Contact() {
  return (
    <div className="w-full h-screen bg-[#cceaf6] flex justify-center items-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/3a7280a4-ceec-4237-bd52-36016b44a1c2"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#1e91d0]">
            Contact
          </p>
          <p className="py-4">submit the form below to contact me.</p>
        </div>
        <input
          className="my-4 p-2 bg-[#DFF6FF]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#DFF6FF]"
          type="emal"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="messafge"
          rows="10"
          className="my-4 p-2 bg-[#DFF6FF]"
          placeholder="Message"
        ></textarea>
        <button className="text-[#001524] border-2 px-8 py-2 my-8 bg-[#DFF6FF]  mx-auto flex items-center border-[#001524] hover:bg-[#1e91d0]  hover:border-[#1e91d0] hover:text-[#fefdf8]">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
