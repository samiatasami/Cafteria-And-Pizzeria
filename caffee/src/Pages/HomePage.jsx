import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between text-center text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fd6924fa] via-[#000000] to-[#fd6924fa]"></div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 mt-20">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
          Welcome to <span className="text-yellow-400">GT Café & Pizzeria</span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Enjoy premium coffee ☕, delicious pizza 🍕, juicy burgers 🍔 and more
          all freshly made with quality ingredients you can trust.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-200 px-4 mt-10">
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-md hover:bg-white/20 transition w-full md:w-auto justify-center">
          <Mail size={20} className="text-yellow-400" />
          <span className="text-sm md:text-base">gtcafe@example.com</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-md hover:bg-white/20 transition w-full md:w-auto justify-center">
          <MapPin size={20} className="text-yellow-400" />
          <span className="text-sm md:text-base">Addis Ababa, Ethiopia</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-md hover:bg-white/20 transition w-full md:w-auto justify-center">
          <Phone size={20} className="text-yellow-400" />
          <span className="text-sm md:text-base">+251 900 123 456</span>
        </div>
      </div>

      {/* Animated Button at bottom */}
      <div className="relative z-10 mb-10">
        <Link
          to="/menu"
          className="px-6 py-3 bg-[#fd6924fa] text-white font-semibold rounded-full shadow-lg 
                     hover:bg-white hover:text-[#fd6924fa] transition-all duration-300 
                     transform hover:scale-110 animate-bounce"
        >
          Explore Our Menu
        </Link>
      </div>
    </div>
  );
}
