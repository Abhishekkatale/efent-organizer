import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mayuri Gavhane",
    designation: "Director, Cadence Academy",
    feedback:
      "The traditional event was conducted with such elegance and attention to detail. It was a remarkable experience, leaving everyone impressed.",
  },
  {
    name: "Dr. R. V. Patil",
    designation: "Principal, PDEACOEM",
    feedback:
      "The annual gathering event was beautifully organized, bringing together students and faculty for a memorable experience. Outstanding coordination and execution!",
  },
  {
    name: "Sanket Tilekar",
    designation: "Founder, Aspire Sports Club",
    feedback:
      "The corporate event exceeded all expectations! The level of professionalism and meticulous planning was evident in every aspect.",
  },
  {
    name: "Sumit Bhosale",
    designation: "DJ Launch Event",
    feedback:
      "The DJ launch event was electric! The energy, ambiance, and flawless organization made it a night to remember.",
  },
  {
    name: "Supriya Jadhav",
    designation: "Car Showroom",
    feedback:
      "The event at our car showroom was a great success. The team ensured every detail was perfect, creating a highly engaging experience for our customers.",
  },
  {
    name: "Umesh Bhadwalkar",
    designation: "Wedding Event",
    feedback:
      "The wedding event was nothing short of magical. From the decorations to the seamless coordination, everything was perfect!",
  },
  {
    name: "Pavan Gavhane",
    designation: "Birthday Event",
    feedback:
      "The birthday event was delightful and filled with joy. The team's efforts in creating a memorable celebration were truly appreciated.",
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
      <h2 className="text-center text-gradient bg-orange-400 bg-clip-text text-transparent text-xl md:text-4xl font-extrabold mb-10">
        Hear from Our Clients
      </h2>
      <motion.div
        className="max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 bg-black text-white rounded-lg shadow-lg relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center">
                <div className="flex space-x-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-center text-lg md:text-xl italic text-gray-300 mb-6">
                  "{testimonial.feedback}"
                </p>
                <h3 className="text-center text-xl md:text-2xl font-bold text-orange-400">
                  {testimonial.name}
                </h3>
                <p className="text-center text-sm md:text-base text-gray-400">
                  {testimonial.designation}
                </p>
              </div>
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-orange-500 w-10 h-10 rounded-full shadow-md"></div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Testimonial;
