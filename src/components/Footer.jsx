import React from "react";
import Logo2 from "../assets/Logo2.png";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#14141F] text-white py-12">
        <Container>
      <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <img src={Logo2} alt="Logo" className="mb-4 w-32" />
          <p className="text-sm text-gray-400">
            The most trusted Courier <br/> company in your area.
          </p>
        </div>

        {/* Other Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Other links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Blogs</li>
            <li>Movers website</li>
            <li>Traffic Update</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Corporate goods</li>
            <li>Artworks</li>
            <li>Documents</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-white font-semibold mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Get Update</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 pl-4 pr-[125px] border-t border-gray-700 pt-4 text-center text-xs text-gray-500 justify-between flex">
        <p>All rights Reserved © Your Company 2021. </p>
        <p>Made with heart by <span className="text-orange-600">ThemeWagon</span></p>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
