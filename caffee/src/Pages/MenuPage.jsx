import { useState } from "react";
import { X } from "lucide-react";

const menuData = {
  Burgers: [
    { id: 1, name: "Classic Burger", price: "320 ETB", fasting: "❌ Not Fasting", img: "/images/classicburger.jpg" },
    { id: 2, name: "Veggie Burger", price: "350 ETB", fasting: "✅ Fasting Friendly", img: "/images/veggieburger.jpg" },
    { id: 3, name: "Cheese Burger", price: "400 ETB", fasting: "❌ Not Fasting", img: "/images/cheeseburger.jpg" },
    { id: 4, name: "Double Patty Burger", price: "480 ETB", fasting: "❌ Not Fasting", img: "/images/doublepittyburger.jpg" },
    { id: 5, name: "Mushroom Burger", price: "370 ETB", fasting: "✅ Fasting Friendly", img: "/images/mushroomburger.jpg" },
    { id: 6, name: "Spicy Chicken Burger", price: "420 ETB", fasting: "❌ Not Fasting", img: "/images/spicyburger.jpg" },
    { id: 7, name: "Grilled Beef Burger", price: "450 ETB", fasting: "❌ Not Fasting", img: "/images/grilledburger.jpg" },
    { id: 8, name: "Fish Burger", price: "390 ETB", fasting: "✅ Fasting Friendly", img: "/images/fishburger.jpg" },
    { id: 9, name: "Mushroom Burger", price: "360 ETB", fasting: "✅ Fasting Friendly", img: "public/images/mushroomburger.jpg" },
    { id: 10, name: "Deluxe Burger", price: "500 ETB", fasting: "❌ Not Fasting", img: "public/images/deluxeburger.jpg" },
  ],
  Pizzas: [
    { id: 11, name: "Margherita Pizza", price: "520 ETB", fasting: "✅ Fasting Friendly", img: "/images/margherita.jpg" },
    { id: 12, name: "Pepperoni Pizza", price: "570 ETB", fasting: "❌ Not Fasting", img: "/images/pepperonipiza.jpg" },
    { id: 13, name: "BBQ Chicken Pizza", price: "600 ETB", fasting: "❌ Not Fasting", img: "/images/bbqchickenpizza.jpg" },
    { id: 14, name: "Veggie Supreme Pizza", price: "550 ETB", fasting: "✅ Fasting Friendly", img: "/images/veggiepizza.jpg" },
    { id: 15, name: "Four Cheese Pizza", price: "580 ETB", fasting: "❌ Not Fasting", img: "images/fourcheesepizza.jpg" },
    { id: 16, name: "Hawaiian Pizza", price: "590 ETB", fasting: "❌ Not Fasting", img: "/images/hawaiianpizza.jpg" },
    { id: 17, name: "Spicy Beef Pizza", price: "610 ETB", fasting: "❌ Not Fasting", img: "public/images/spicypaneerpizza.jpg" },
    { id: 18, name: "Mushroom Pizza", price: "540 ETB", fasting: "✅ Fasting Friendly", img: "/images/mushroompizza.jpg" },
    { id: 19, name: "Seafood Pizza", price: "650 ETB", fasting: "❌ Not Fasting", img: "/images/seafoodpizza.jpg" },
    { id: 20, name: "Deluxe Pizza", price: "530 ETB", fasting: "✅ Fasting Friendly", img: "/images/deluxepizza.jpg" },
  ],
  "Hot Drinks": [
    { id: 21, name: "Cappuccino", price: "180 ETB", fasting: "✅ Fasting Friendly", img: "/images/cappuccino.jpg" },
    { id: 22, name: "Espresso", price: "150 ETB", fasting: "✅ Fasting Friendly", img: "/images/espresso.jpg" },
    { id: 23, name: "Latte", price: "190 ETB", fasting: "✅ Fasting Friendly", img: "/images/latte.jpg" },
    { id: 24, name: "Hot Chocolate", price: "170 ETB", fasting: "❌ Not Fasting", img: "/images/hotchocolate.jpg" },
    { id: 25, name: "Macchiato", price: "160 ETB", fasting: "✅ Fasting Friendly", img: "/images/macchiato.jpg" },
    { id: 26, name: "Flat White", price: "175 ETB", fasting: "✅ Fasting Friendly", img: "/images/flatwhite.jpg" },
    { id: 27, name: "Mocha", price: "200 ETB", fasting: "❌ Not Fasting", img: "/images/mocha.jpg" },
    { id: 28, name: "Turkish Coffee", price: "220 ETB", fasting: "✅ Fasting Friendly", img: "/images/turkishcoffee.jpg" },
    { id: 29, name: "Americano", price: "160 ETB", fasting: "✅ Fasting Friendly", img: "/images/americano.jpg" },
    { id: 30, name: "Mocha ", price: "250 ETB", fasting: "❌ Not Fasting", img: "/images/mocha.jpg" },
  ],
  Beverages: [
    { id: 31, name: "Fresh Orange Juice", price: "200 ETB", fasting: "✅ Fasting Friendly", img: "/images/orange.jpg" },
    { id: 32, name: "Lemonade", price: "150 ETB", fasting: "✅ Fasting Friendly", img: "/images/lemonade.jpg" },
    { id: 33, name: "Cola", price: "120 ETB", fasting: "❌ Not Fasting", img: "/images/cola.jpg" },
    { id: 34, name: "Iced Tea", price: "140 ETB", fasting: "✅ Fasting Friendly", img: "/images/icedtea.jpg" },
    { id: 35, name: "Mango Juice", price: "210 ETB", fasting: "✅ Fasting Friendly", img: "/images/mangojuice.jpg" },
    { id: 36, name: "Pineapple Juice", price: "220 ETB", fasting: "✅ Fasting Friendly", img: "/images/pineapplejuice.jpg" },
    { id: 37, name: "Energy Drink", price: "300 ETB", fasting: "❌ Not Fasting", img: "/images/energydrink.jpg" },
    { id: 38, name: "Mineral Water", price: "80 ETB", fasting: "✅ Fasting Friendly", img: "/images/mineralwater.jpg" },
    { id: 39, name: "Strawberry Smoothie", price: "250 ETB", fasting: "✅ Fasting Friendly", img: "public/images/strawberryjuice.jpg" },
    { id: 40, name: "Watermelon", price: "230 ETB", fasting: "❌ Not Fasting", img: "public/images/watermelonjuice.jpg" },
  ],
};

    
export default function MenuPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fd6924fa] via-black to-[#fd6924fa] text-white px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">
        Our <span className="text-yellow-400">Menu</span>
      </h1>

      {selectedItem ? (
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 rounded-2xl shadow-xl p-8 max-w-5xl w-full mx-auto overflow-hidden">
          {/* Background image + gradient blended together */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-blend-overlay"
            style={{
              backgroundImage: `linear-gradient(to bottom right, #fd6924fa, #000000, #fd6924fa), url(${selectedItem.img})`,
            }}
          ></div>

          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-gradient-to-br border-2  shadow-2xl border-white  from-[#fd6924fa] via-black to-[#fd6924fa] rounded-2xl"></div>

          {/* Close button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 text-white hover:text-red-400 transition z-10"
          >
            <X size={28} />
          </button>

          {/* Foreground content */}
          <div className="relative flex flex-col md:flex-row items-center gap-8 z-10">
            <img
              src={selectedItem.img}
              alt={selectedItem.name}
              className="w-full md:w-1/2 h-auto max-h-[70vh] object-contain rounded-xl shadow-md"
            />

            <div className="space-y-4 text-center md:text-left md:w-1/2">
              <h2 className="text-3xl font-bold text-yellow-400">{selectedItem.name}</h2>
              <p className="text-xl font-semibold">{selectedItem.price}</p>
              <p
                className={`font-medium ${
                  selectedItem.fasting.includes("✅") ? "text-green-400" : "text-red-400"
                }`}
              >
                {selectedItem.fasting}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          {Object.keys(menuData).map((category) => (
            <div key={category}>
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">{category}</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {menuData[category].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="relative group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                  >
                    <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />

                    {/* Hover text at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#fd6924fa] bg-opacity-60 py-2 px-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <p className="text-white text-sm font-medium">
                        Click the picture for detail information
                      </p>
                    </div>

                    {/* Name + Price */}
                    <div className="flex justify-between items-center px-2 py-1 text-black">
                      <p className="font-medium text-sm truncate">{item.name}</p>
                      <p className="font-semibold text-sm">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
