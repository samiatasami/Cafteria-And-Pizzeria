import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#fd6924fa] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-white">
          <img
            src="" 
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="font-bold text-xl text-white">GT Cafe And Pizzeria</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link
            to="#home"
            className="text-white px-3 py-2 hover:border-white hover:rounded-lg hover:bg-white hover:text-[#fd6924fa] transition-all"
          >
            Home
          </Link>
          <Link
            to="#about"
            className="text-white px-3 py-2 hover:border-white hover:rounded-lg hover:bg-white hover:text-[#fd6924fa] transition-all"
          >
            About Us
          </Link>
          <Link
            to="#menu"
            className="text-white px-3 py-2 hover:border-white hover:rounded-lg hover:bg-white hover:text-[#fd6924fa] transition-all"
          >
            Menu
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute right-4 top-16 bg-white shadow-lg rounded-lg p-4">
          <div className="flex flex-col items-start space-y-3 font-medium">
            <Link to="#home" onClick={closeMenu} className="text-[#fd6924fa] hover:underline">
              Home
            </Link>
            <Link to="#about" onClick={closeMenu} className="text-[#fd6924fa] hover:underline">
              About Us
            </Link>
            <Link to="#menu" onClick={closeMenu} className="text-[#fd6924fa] hover:underline">
              Menu
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
