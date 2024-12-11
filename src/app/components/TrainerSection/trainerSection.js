import React from "react";

const TrainerSection = () => {
  const trainers = [
    {
      id: 1,
      name: "Jhonatan Alex",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      image: "/path-to-image.jpg", // Replace with the actual image path
    },
    {
      id: 2,
      name: "Jane Doe",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      image: "/path-to-image.jpg", // Replace with the actual image path
    },
    {
      id: 3,
      name: "John Smith",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      image: "/path-to-image.jpg", // Replace with the actual image path
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-lg uppercase text-gray-400">Trainers</h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Trainers Ready To Train You
          </h2>
          <div className="w-16 h-1 bg-lime-500 mx-auto mt-4"></div>
        </div>

        {/* Trainer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md relative"
            >
              {/* Trainer Image */}
              <div className="h-64 bg-gray-600 flex items-center justify-center">
                {/* Replace with actual image */}
                <span className="text-gray-300">Image Placeholder</span>
              </div>

              {/* Trainer Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                <p className="text-gray-400">{trainer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
