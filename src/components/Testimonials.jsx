import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/H3.jpeg";


const testimonials = [
  {
    name: "John Doe",
    designation: "CEO, ABC Corp",
    image: image1,
    feedback:
      "This event was exceptional! The organization and execution were flawless. Highly recommend!",
  },
  {
    name: "Jane Smith",
    designation: "Marketing Head, XYZ Ltd",
    image: image1,
    feedback:
      "An outstanding experience! Every detail was taken care of, and the team was fantastic to work with.",
  },
  {
    name: "Emily Johnson",
    designation: "Event Manager, LMN Inc",
    image: image1,
    feedback:
      "The level of professionalism and creativity displayed in this event was truly impressive.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A] py-16">
      <h2 className="text-center text-[#C29180] text-3xl md:text-5xl font-bold mb-8">
        What Our Clients Say
      </h2>
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 text-white rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover shadow-md border-2 border-[#C29180]"
                />
                <div className="flex-1">
                  <p className="text-lg md:text-xl italic text-gray-300 mb-4">
                    "{testimonial.feedback}"
                  </p>
                  <h3 className="text-lg md:text-2xl font-bold text-[#C29180]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Testimonial;
