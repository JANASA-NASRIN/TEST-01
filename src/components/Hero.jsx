import React from "react";
import Container from "./Container";
import Banner from "../assets/banner.png"; 

const Hero = () => {
  return (
    <section className="bg-[#FFF7E6] text-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          {/* Text block */}
          <div className="max-w-lg mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-[#261134]">
              A trusted provider of <br />
              <span className="font-extrabold text-[#261134]">
                courier services.
              </span>
            </h1>

            <p className="text-gray-400 mb-8 w-[330px]">
              We deliver your products safely to<br />
              your home in a reasonable time.
            </p>

            <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded text-white font-medium">
              Get started →
            </button>
          </div>

          {/* Hero Image */}
          <div className="max-w-xl">
            <img src={Banner} alt="Hero Banner" className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
