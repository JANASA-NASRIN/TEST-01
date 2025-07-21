import React from "react";
import quote from "../assets/quote.png";
import User from "../assets/User.png"; 

const Testimonial = () => {
  return (
    <section className="bg-[#FFF7EC] py-20">
      <div className="max-w-[872px] mx-auto px-4">
        {/* Quote + Title */}
        <div className="flex items-center mb-6 gap-[27px]">
          <img src={quote} alt="Quote" className="w-[133px] h-[133px] mr-4" />
          <div >
            <p className="text-orange-600 uppercase font-bold mb-1 text-center">Testimonial</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Our Awesome Clients
            </h2>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-orange-600 font-bold mb-2">Fantastic service!</p>
          <p className="text-gray-600 mb-4 text-sm">
            I purchased a phone from an e-commerce site, and this courier service provider
            assisted me in getting it delivered to my home. I received my phone within one
            day and was really satisfied with their service. They are really quick and
            dependable. They even help me with the option of real-time delivery status,
            which allows me to track the progress of my goods delivery. I got a lot of
            queries from their call center support and by account messages. They come highly
            recommended. Confidently say that they are really reliable.
          </p>

          {/* Bottom row */}
          <div className="flex items-center justify-between">
            <p className="text-orange-600 text-lg">★★★★★</p>
            <div className="flex items-center">
              <img
                src={User}
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Yves Tanguy
                </p>
                <p className="text-xs text-gray-500">Chief Executive, DLF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
