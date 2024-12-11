import React from "react";

const BrandSection = () => {
  const brands = [
    { id: 1, name: "Lasteen", icon: "/path-to-icon1.png" },
    { id: 2, name: "Barblein", icon: "/path-to-icon2.png" },
    { id: 3, name: "Strongerz", icon: "/path-to-icon3.png" },
    { id: 4, name: "Thunderz", icon: "/path-to-icon4.png" },
    { id: 5, name: "Barskull", icon: "/path-to-icon5.png" },
  ];

  return (
    <section className="bg-black py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div key={brand.id} className="text-center text-white">
              {/* Brand Icon */}
              <div className="w-16 h-16 mx-auto">
                <img
                  src={brand.icon}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Brand Name */}
              <p className="mt-4 text-lg font-bold">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
