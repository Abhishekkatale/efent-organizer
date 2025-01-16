import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurPartners = () => {
  const partners = [
    { name: "Partner 1", logo: require("../assets/Aspire.png") },
    { name: "Partner 2", logo: require("../assets/hespro1.jpg") },
    { name: "Partner 3", logo: require("../assets/hotel.jpg") },
    { name: "Partner 4", logo: require("../assets/pdea1.jpg") },
    { name: "Partner 5", logo: require("../assets/AAgamingg.png") },
    { name: "Partner 6", logo: require("../assets/puneridd.png") },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller laptops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A] py-16 px-8 lg:px-24">
      <div className="text-center mb-12">
        {/* Section Tag */}
        <div className="inline-block bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
          Our Partners
        </div>
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-orange-400">
          Trusted by Leading Brands
        </h2>
        {/* Description */}
        <p className="text-gray-100 text-lg mt-4">
          We are proud to collaborate with industry leaders to deliver
          exceptional experiences.
        </p>
      </div>

      {/* Partner Logos Carousel */}
      <div className="lg:hidden">
        <Slider {...sliderSettings}>
          {partners.map((partner, index) => (
            <div key={index} className="p-4">
              <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for larger screens */}
      <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
