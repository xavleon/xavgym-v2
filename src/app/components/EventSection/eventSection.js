import React from "react";

const EventSection = () => {
  const events = [
    {
      id: 1,
      title: "Healthy Body Workout With Gymax",
      description:
        "Mi Enim Quam Elementum Fermentum. Malesuada Posuere Enim Est Lacus. Convallis Id In.",
      date: "January 22, 2022",
      time: "09:00 AM - 12:00 AM",
      location: "Logan Tower 211,Gymax",
      category: "Competition & Training",
      image: "/path-to-image.jpg", // Replace with real image path
    },
    {
      id: 2,
      title: "Healthy Body Workout With Gymax",
      description:
        "Mi Enim Quam Elementum Fermentum. Malesuada Posuere Enim Est Lacus. Convallis Id In.",
      date: "January 22, 2022",
      time: "09:00 AM - 12:00 AM",
      location: "Logan Tower 211,Gymax",
      category: "Competition & Training",
      image: "/path-to-image.jpg", // Replace with real image path
    },
    {
      id: 3,
      title: "Healthy Body Workout With Gymax",
      description:
        "Mi Enim Quam Elementum Fermentum. Malesuada Posuere Enim Est Lacus. Convallis Id In.",
      date: "January 22, 2022",
      time: "09:00 AM - 12:00 AM",
      location: "Logan Tower 211,Gymax",
      category: "Competition & Training",
      image: "/path-to-image.jpg", // Replace with real image path
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Every Year We Hold An Event For Gymmax
          </h2>
          <p className="text-gray-400">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Mi Enim
            Quam Elementum Fermentum. Malesuada Posuere Enim Est Lacus. Ac Amet,
            Quam Pulvinar Pulvinar Amet. Convallis Id In Quis Orci.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              {/* Event Image */}
              <div className="h-48 bg-gray-600 flex items-center justify-center">
                {/* Replace this div with an image */}
                <span className="text-gray-300">Image Placeholder</span>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {event.description}
                </p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>
                    <span className="font-bold">📅 Date:</span> {event.date}
                  </li>
                  <li>
                    <span className="font-bold">⏰ Time:</span> {event.time}
                  </li>
                  <li>
                    <span className="font-bold">📍 Location:</span>{" "}
                    {event.location}
                  </li>
                  <li>
                    <span className="font-bold">🏆 Category:</span>{" "}
                    {event.category}
                  </li>
                </ul>
                <button className="bg-lime-500 hover:bg-lime-600 text-black font-bold py-2 px-4 rounded-md">
                  See Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
