import React from "react";
import vector_4 from "/public/vector4.png";
import bgContainer from "/public/bg-vector.png";
import bgContainer2 from "/public/bg-vector-2.png";
import bear from "/public/bear.png";
import Image from "next/image";
import StatsContainer from "@/app/components/Statbox/statsContainer";
import StatsWithIconsContainer from "@/app/components/Statbox/StatsWithIconsContainer";
import PricingSection from "@/app/components/PricingSection/pricingSection";
import GymEventSection from "@/app/components/GymEventSection/gymEventSection";
import EventSection from "@/app/components/EventSection/eventSection";
import TrainerSection from "@/app/components/TrainerSection/trainerSection";
import BrandSection from "@/app/components/BrandSection/brandSection";
import TestimonialsSection from "@/app/components/TestimonialSection/testimonialSection";
import Footer from "@/app/components/Footer/footer";
//import "./style.css";

const HomePage = () => {
  return (
    <div>
      <div className="home-page ">
        <div className="home-page__content flex p-20">
          <div className="leftContainer ">
            <h1 class="text-white font-bold text-5xl md:text-7xl text-left uppercase tracking-widest leading-tight  w-4/4">
              Build Your Body Shape it Stronger and Fuller
            </h1>
            <div class="w-3/4 h-1 bg-lime-500 mt-4"></div>
            <p class=" text-white text-lg md:text-2xl text-left mt-4 w-1/2">
              This is the home page of the website. Here you can find all the
              information about the website and the services we provide.
            </p>
            <button className="mt-5 bg-lime-500 text-black font-bold py-2 px-6 rounded hover:bg-lime-600 transition duration-200">
              Get Started
            </button>
          </div>

          <div className="rightContainer w-[3000px] flex justify-center items-center ">
            <Image src={vector_4} alt="vector_4" />
          </div>
        </div>
        <StatsContainer />
        {/* Second Section */}
        <div class="flex flex-col md:flex-row min-h-screen items-center">
          {/* Left Container  */}
          <div class="p-10 w-full md:w-1/2 flex justify-center">
            <Image
              src={bear}
              alt="Healthy Lifestyle"
              class="max-w-[300px] md:max-w-[600px]"
            />
          </div>
          {/* Right Container */}
          <div class="relative w-full md:w-1/2 flex flex-col justify-center px-10 ">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 mr-10">
              <Image
                src={bgContainer} // Replace with your image path
                alt="Background"
                layout="fill" // Makes the image fill the parent container
                objectFit="cover" // Ensures the image covers the container
                objectPosition="-200px center" // Centers the image within the container
              />
            </div>

            {/* Content */}
            <h2 class="text-lg font-bold mb-4">About Us</h2>
            <h1 class="text-white font-bold text-5xl md:text-4xl text-left uppercase tracking-widest leading-tight">
              Healthy Body Workout with <br />
              <span>Gymmax</span>
            </h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi enim
              quam elementum fermentum. Malesuada posuere enim est lacus. Ac
              amet, quam pulvinar pulvinar amet. Convallis id in quis orci.
            </p>
            <div class="w-3/4 h-1 bg-lime-500 mt-5"></div>
            <button className="mt-10 bg-lime-500 text-black font-bold py-2 px-8 rounded hover:bg-lime-600 transition duration-200 w-1/4">
              See Detail
            </button>
          </div>
        </div>
        {/* Third Section: Center */}
        <div className="relative w-full md:w-full flex flex-col justify-center items-center px-10 overflow-hidden ">
          {/* Background Image */}
          <div className="w-1/3 flex justify-center items-center text-center align-middle absolute mr-28 mt-15">
            <Image
              src={bgContainer2} // Replace with your background image path
              alt="Background"
              objectFit="cover" // Adjusts image scaling without cropping
              objectPosition="-100px center" // Centers the image within the container
            />
          </div>

          {/* Content */}
          <h2 className="text-lg font-bold mb-4 z-10">Our Class</h2>
          <h1 className="text-white font-bold text-5xl md:text-4xl text-center uppercase tracking-widest leading-tight z-10 w-1/3">
            {" "}
            Professional Gym Class For You
          </h1>
          <div className="w-1/4 h-1 bg-lime-500 mt-5"></div>

          {/* Right Container */}
        </div>
        <div className="grid grid-cols-3 gap-4 p-20">
          {/* Box 1 */}
          <div className="bg-gray-700 w-full h-96 flex items-center justify-center text-white">
            Box 1
          </div>
          {/* Box 2 */}
          <div className="bg-gray-700 w-full h-96 flex items-center justify-center text-white">
            Box 2
          </div>
          {/* Box 3 */}
          <div className="bg-gray-700 w-full h-96 flex items-center justify-center text-white">
            Box 3
          </div>
          {/* Box 4 */}
          <div className="bg-gray-700 w-full h-96 flex items-center justify-center text-white">
            Box 4
          </div>
          {/* Box 5 */}
          <div className="bg-gray-700 w-full h-96 flex items-center justify-center text-white">
            <div class="text-center">
              <h3 className="text-2xl font-bold">Cardio Class</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit mi
                enim.
              </p>
            </div>
          </div>
          {/* Box 6 */}
          <div className="bg-gray-700 w-full h-96 flex items-center justify-center text-white">
            <div className="text-center">
              <p>Box 6</p>
            </div>
          </div>
        </div>
        <StatsWithIconsContainer />
        <PricingSection />
        <GymEventSection />
        <EventSection />
        <TrainerSection />
        <BrandSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
