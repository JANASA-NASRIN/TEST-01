import React from "react";
import map from "../assets/map.png"; 
import location from "../assets/location.png";
import Clock from "../assets/Clock.png";
import email from "../assets/email.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import x from "../assets/x.png";

const FindUs = () => {
  return (
    <section className="bg-[#FFF7EC] py-20">
      <div className="max-w-[1220px] mx-auto px-4 ">
        {/* Heading */}
        <div className="text-center mb-[85px]">
        <p className="text-orange-600 font-bold uppercase mb-2 text-2xl">Find Us</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Access us easily</h2>
        </div>
        

        {/* Map + Info */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Map */}
          <div className="md:w-2/3">
            <img src={map} alt="Map" className="w-full rounded" />
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3 bg-white rounded-lg shadow  pt-[81px] text-center">
            <h3 className="text-lg font-semibold mb-[37px]">Contact with us</h3>
            <div className="flex items-start mb-3 pl-[88px]">
              <img src={location} alt="Location" className="w-4 h-4 mr-2 mt-1" />
              <p className="text-sm">2277 Lorem Ave, San Diego, CA 22553</p>
            </div>
            <div className="flex items-start mb-3 pl-[88px]">
              <img src={Clock} alt="Clock" className="w-4 h-4 mr-2 mt-1" />
              <p className="text-sm">
                Monday - Friday: 9 am - 10 pm <br /> Sunday: 11 am - 9 pm
              </p>
            </div>
            <div className="flex items-start mb-4 pl-[88px]">
              <img src={email} alt="Mail" className="w-4 h-4 mr-2 mt-1" />
              <p className="text-sm">info@quiarbox.com</p>
            </div>
            {/* Social */}
            <div className="flex space-x-3 pl-[88px] pt-5">
              <img src={fb} alt="Facebook" className="w-4 h-4" />
              <img src={insta} alt="Instagram" className="w-4 h-4" />
              <img src={x} alt="LinkedIn" className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Call Button */}
        <div className="flex justify-center">
          <button className="bg-orange-600 text-white py-3 px-6 rounded flex items-center">
             Call us to delivery <span className="ml-2 font-bold">123-456789</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
