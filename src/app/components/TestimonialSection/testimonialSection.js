import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Johnatan G",
      role: "Fitness Expert",
      text: "Mi Enim Quam Elementum Fermentum. Malesuada Posuere Enim Est Lacus. Convallis Id In Quis Orci Posuere Sagittis. Consectetur",
      image: "/path-to-image1.jpg", // Replace with the actual image path
    },
    {
      id: 2,
      name: "Alliaz Virgi",
      role: "Fitness Expert",
      text: "Mi Enim Quam Elementum Fermentum. Malesuada Posuere Enim Est Lacus. Convallis Id In Quis Orci Posuere Sagittis. Consectetur Non Integer Ac Viverra Ut",
      image: "/path-to-image2.jpg", // Replace with the actual image path
      isHighlighted: true,
    },
    {
      id: 3,
      name: "Johnatan G",
      role: "Fitness Expert",
      text: "Mi Enim Quam Elementum Fermentum. Malesuada Posuere Enim Est Lacus. Convallis Id In Quis Orci Posuere Sagittis. Consectetur",
      image: "/path-to-image3.jpg", // Replace with the actual image path
    },
  ];

  return (
    <section className="bg-black py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-lg uppercase text-gray-400">Testimonials</h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            What They Say About Us?
          </h2>
          <div className="w-16 h-1 bg-lime-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Mi Enim
            Quam Elementum Fermentum. Malesuada Posuere Enim Est Lacus. Ac Amet,
            Quam Pulvinar Pulvinar Amet. Convallis Id In Quis Orci.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-6 rounded-lg shadow-lg ${
                testimonial.isHighlighted
                  ? "bg-lime-500 text-black"
                  : "bg-gray-800 border border-gray-600"
              }`}
            >
              {/* Profile Image */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name and Role */}
              <h3 className="text-xl font-bold text-center">
                {testimonial.name}
              </h3>
              <p className="text-center text-gray-400">{testimonial.role}</p>
              {/* Testimonial Text */}
              <p
                className={`mt-4 text-center ${
                  testimonial.isHighlighted
                    ? "text-black font-semibold"
                    : "text-gray-400"
                }`}
              >
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
