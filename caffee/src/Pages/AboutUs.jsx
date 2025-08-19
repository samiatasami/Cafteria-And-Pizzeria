import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fd6924fa] via-[#000000] to-[#fd6924fa] text-white flex flex-col items-center px-6 py-16">
      {/* Title */}
      <h1 className="text-6xl md:text-7xl font-extrabold mb-12 text-center drop-shadow-lg">
        About <span className="text-yellow-400">GT Café</span>
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl w-full">
        
        {/* Card 1: History */}
        <div className="group relative bg-black/40 backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 shadow-lg shadow-black">
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-transparent bg-gradient-to-r from-orange-500 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Established in <span className="font-semibold">2010</span>, GT Café & Pizzeria has proudly served the community for over{" "}
              <span className="font-semibold">15 years</span>, offering warmth,
              friendship, and unforgettable flavors.
            </p>
          </div>
        </div>

        {/* Card 2: Bank Accounts */}
        <div className="group relative bg-black/40 backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 shadow-lg shadow-black">
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-transparent bg-gradient-to-r from-orange-500 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Bank Accounts</h2>
            <ul className="space-y-3 text-lg">
              <li>🏦 Commercial Bank of Ethiopia <h4>100022.........</h4></li>
              <li>🏦 Awash International Bank <h4>100022.........</h4></li>
              <li>🏦 Cooperative Bank of Oromia <h4>100022.........</h4></li>
            </ul>
          </div>
        </div>

        {/* Card 3: Vision */}
        <div className="group relative bg-black/40 backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 shadow-lg shadow-black">
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-transparent bg-gradient-to-r from-orange-500 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To be the leading café & pizzeria that blends tradition with innovation, 
              creating a welcoming space where every cup and bite brings people closer together.
            </p>
          </div>
        </div>

        {/* Card 4: Branches with Map Buttons */}
        <div className="group relative bg-black/40 backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 shadow-lg shadow-black">
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-transparent bg-gradient-to-r from-orange-500 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Branches</h2>

            {/* Ayat Branch */}
            <div>
              <p className="text-lg mb-2">📍 Ayat Branch</p>
              <button
                onClick={() => window.open("https://maps.app.goo.gl/b8fa6QAyox8JAkZs6", "_blank")}
                className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-white hover:text-[#fd6924fa] transition"
              >
                See The Location on Maps
              </button>
            </div>

            {/* Legetafo Branch */}
            <div>
              <p className="text-lg mb-2">📍 Legetafo Branch</p>
              <button
                onClick={() => window.open("https://maps.app.goo.gl/rWzquvVCAkdJfCRW6", "_blank")}
                className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-white hover:text-[#fd6924fa] transition"
              >
                See The Location on Maps
              </button>
            </div>

            {/* Figa Branch */}
            <div>
              <p className="text-lg mb-2">📍 Figa Branch</p>
              <button
                onClick={() => window.open("https://maps.app.goo.gl/SjWaQZ9CDDuakXin8", "_blank")}
                className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-white hover:text-[#fd6924fa] transition"
              >
                See The Location on Maps
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 group relative inline-block transition-all duration-500 hover:scale-105">
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-transparent bg-gradient-to-r from-orange-500 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Link
          to="/menu"
          className="relative z-10 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg transition-all duration-300 group-hover:bg-white group-hover:text-[#fd6924fa]"
        >
          Explore Our Menu
        </Link>
      </div>
    </div>
  );
}
