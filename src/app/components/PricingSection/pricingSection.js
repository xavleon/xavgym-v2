import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Pricing Card */}
        <div className="border border-gray-600 p-8 text-white text-center rounded-md">
          <h3 className="text-2xl font-bold mb-4">Basic Pricing</h3>
          <p className="text-4xl font-extrabold mb-2">
            $11.99<span className="text-lg font-normal">/Month</span>
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center justify-center gap-3">
              <span className="bg-green-500 text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="bg-green-500 text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="bg-green-500 text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="bg-green-500 text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
          </ul>
          <button className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 font-bold rounded-md">
            Choose now
          </button>
        </div>

        {/* Standard Pricing Card */}
        <div className="border border-gray-600 p-8 text-white text-center rounded-md">
          <h3 className="text-2xl font-bold mb-4">Standard Pricing</h3>
          <p className="text-4xl font-extrabold mb-2">
            $22.33<span className="text-lg font-normal">/Month</span>
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center justify-center gap-3">
              <span className="bg-green-500 text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="bg-green-500 text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="bg-green-500 text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="bg-green-500 text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
          </ul>
          <button className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 font-bold rounded-md">
            Choose now
          </button>
        </div>

        {/* Special Pricing Card */}
        <div className="bg-lime-500 p-8 text-black text-center rounded-md">
          <h3 className="text-2xl font-bold mb-4">Special Pricing</h3>
          <p className="text-4xl font-extrabold mb-2">
            $32.99<span className="text-lg font-normal">/Month</span>
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center justify-center gap-3">
              <span className="bg-black text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="bg-black text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="bg-black text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="bg-black text-white p-2 rounded-full">
                &#10003;
              </span>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </li>
          </ul>
          <button className="bg-black text-white px-6 py-2 font-bold rounded-md">
            Choose Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
