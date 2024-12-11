import React from "react";
import logo from "/public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Logo and About */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image src={logo} alt="XavGym Logo" width={80} height={80} />
            <span className="text-lime-500 font-bold text-xl">Gymmax</span>
          </div>
          <p className="text-sm">
            Mi Enim Quam Elementum Fermentum. Malesuada Posuere Enim Est Lacus.
            Convallis Id In Quis Orci Posuere
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-lime-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-lime-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-lime-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-lime-500">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Our Gym */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Our Gym</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-lime-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500">
                Our Class
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Page */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Page</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-lime-500">
                Trainers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500">
                Our Event
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500">
                Event Detail
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-lime-500">
                Term Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Subscribe */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            Come Join With Us!
          </h3>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Subscribe Us"
              className="bg-gray-800 text-sm text-white px-4 py-2 rounded-md w-full focus:outline-none focus:ring focus:ring-lime-500"
            />
            <button className="bg-lime-500 hover:bg-lime-600 text-black px-4 py-2 rounded-md">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-600 mt-8">
        &copy; 2022 Gymmax All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
