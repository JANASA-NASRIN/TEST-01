import React from "react";
import Illustration from "../assets/Illustration.png"; 

const Callback = () => {
  return (
    <section className="bg-[#FFF7EC] py-20">
      <div className="max-w-[872px] mx-auto px-4 bg-[#FFF7E6] rounded-lg shadow flex flex-col md:flex-row overflow-hidden">
        {/* Image + Text */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center max-w-[424px] h-[476px] ">
          <img src={Illustration} alt="Request Callback" className="mb-4 w-[371px]" />
          <p className="text-orange-600 font-bold uppercase mb-2">
            Request a Callback
          </p>
          <h3 className="text-xl font-extrabold mb-1 text-gray-950">
            We will contact in the <br/>shortest time.
          </h3>
          <p className="text-gray-600 text-sm">
            Monday to Friday, 9am-5pm.
          </p>
        </div>

        {/* Form */}
        <div className="md:w-1/2 bg-[#FFF7E6] p-6 flex flex-col justify-center">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
          />
          <textarea
            placeholder="Message"
            rows="3"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
          ></textarea>
          <button className="bg-orange-600 text-white py-2 rounded w-full">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Callback;
