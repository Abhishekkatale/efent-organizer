import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/H3.jpeg";
import image2 from "../assets/S4.JPG";
import image3 from "../assets/S1.JPG";

const cardsData = [
  {
    title: "Event",
    description:
      "We create amazing occasion and entertainment events through extraordinary event design, planning & production. Rated #1 event management company in Mumbai, as well as one of the top event firms in India.",
    image: image1,
  },
  {
    title: "Brand Activation",
    description:
      "We proudly present our very own BTL segment ONE ON ONE that involves the use of subtle marketing techniques to get the product right to where the consumers are present. The activities involve multiple marketing channels.",
    image: image2,
  },
  {
    title: "Exhibition",
    description:
      "Exhibitions are major events for any company & we fully understand the need for a return on investment. With this in mind, every exhibition stall is designed and constructed by our experienced designers.",
    image: image3,
  },
];

const Cards = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-8 px-8 py-16 bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {cardsData.map((card, index) => (
        <motion.div
          key={index}
          className="relative max-w-md w-[450px] h-[450px] bg-black/50 text-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
            boxShadow: "0px 10px 30px rgba(255, 165, 0, 0.5)",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
            whileHover={{
              scale: 1.1,
              filter: "brightness(0.85)",
            }}
            transition={{ duration: 0.4 }}
          ></motion.div>
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.div
            className="relative p-8 space-y-8"
            whileHover={{ translateY: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl text-orange-400 font-bold">{card.title}</h3>
            <p className="text-xl text-gray-300">{card.description}</p>
            <motion.a
              href="#"
              className="inline-block mt-4 text-orange-400 underline text-lg"
              whileHover={{ scale: 1.2, color: "#FF4500" }}
              whileTap={{ scale: 0.9 }}
            >
              Read More
            </motion.a>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;
