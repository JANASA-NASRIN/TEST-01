import React from "react";
import Logo1 from "../assets/Logo1.png";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="bg-gray-100">
        {/* Container for Navbar */}
        <Container >
      <div className="flex items-center justify-between max-w-[1920px] mx-auto px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo1} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li className="cursor-pointer hover:text-gray-800">Home</li>
          <li className="cursor-pointer hover:text-gray-800">Our services</li>
          <li className="cursor-pointer hover:text-gray-800">About Us</li>
          <li className="cursor-pointer hover:text-gray-800">What's new?</li>
        </ul>

        {/* Right Buttons */}
        <div className="flex space-x-4">
          <button className="p-2 rounded bg-yellow-200 hover:bg-yellow-300">
            🔍
          </button>
          <button className="px-4 py-2 bg-orange-200 rounded hover:bg-orange-300">
            Contact us
          </button>
        </div>
      </div>
        </Container>
    </nav>
  );
};

export default Navbar;
