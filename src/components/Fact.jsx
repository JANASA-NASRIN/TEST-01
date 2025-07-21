import React from "react";
import award from "../assets/award.png";
import states from "../assets/states.png";
import clients from "../assets/clients.png";
import goods from "../assets/goods.png";
import bag from "../assets/bag.png";

const Fact = () => {
  return (
    <section className="bg-[#FFF7EC] py-12 ">
      <div className="max-w-[1320px] mx-auto px-4 ">
        <div className="flex flex-wrap justify-center gap-[156px] text-center">
          <div>
            <img src={award} alt="Award Icon" className="w-12 h-12 mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-600">26+</p>
            <p className="text-gray-600 text-sm">Awards won</p>
          </div>

          <div>
            <img src={states} alt="States Icon" className="w-12 h-12 mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-600">65+</p>
            <p className="text-gray-600 text-sm">States covered</p>
          </div>

          <div>
            <img src={clients} alt="Happy Clients Icon" className="w-12 h-12 mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-600">689K+</p>
            <p className="text-gray-600 text-sm">Happy clients</p>
          </div>

          <div>
            <img src={goods} alt="Goods Delivered Icon" className="w-12 h-12 mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-600">130M+</p>
            <p className="text-gray-600 text-sm">Goods delivered</p>
          </div>

          <div>
            <img src={bag} alt="Business Hours Icon" className="w-12 h-12 mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-600">130M+</p>
            <p className="text-gray-600 text-sm">Business hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fact;
