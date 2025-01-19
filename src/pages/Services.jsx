import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaBullhorn, FaChartLine, FaSearch, FaHandshake } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  { 
    question: 'What types of events do you manage at Efnet?', 
    answer: 'At Efnet, we specialize in managing a wide range of events, including Corporate Events, Exhibitions, Brand Activations, and Digital Desk – Staff Management services.' 
  },
  { 
    question: 'How do you ensure that each event is unique and special?', 
    answer: 'We work closely with our clients to understand their vision and provide customized event solutions. From the theme and decor to entertainment and logistics, we ensure every detail is tailored to create a one-of-a-kind experience.' 
  },
  { 
    question: 'Can Efnet help with both small and large-scale events?', 
    answer: 'Yes, whether you’re hosting an intimate gathering or a grand celebration, Efnet has the expertise and resources to handle events of any size, ensuring quality service and attention to detail.' 
  },
  { 
    question: 'What services are included in your event planning packages?', 
    answer: 'Our event planning packages include venue selection, catering, decor, entertainment, transportation, event coordination, and more. We take care of everything so you can focus on enjoying your event.' 
  },
];

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const EventManagementPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <section className="py-32 px-6 lg:px-12 bg-black">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold text-orange-600 mb-6">
              Elevate Your Event with Efnet's Expertise
            </h1>
            <p className="text-lg text-white">
              Efnet offers a range of event management services designed to make your event unforgettable. From Corporate Events to Brand Activations and Digital Desk services, our team is dedicated to delivering excellence.
            </p>
          </motion.div>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-[#FFF3CD] p-6 rounded-lg shadow-lg">
                  <FaBullhorn className="text-purple-600 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Corporate Events</h2>
                  <p>
                    We specialize in organizing impactful corporate events that align with your company’s goals, including conferences, workshops, and seminars.
                  </p>
                </div>
                <div className="bg-[#FFF3CD] p-6 rounded-lg shadow-lg">
                  <FaChartLine className="text-purple-600 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Exhibitions</h2>
                  <p>
                    Efnet manages exhibitions that showcase your brand and products to a widepurple-600e. Our team ensures smooth execution and a memorable experience for attendees.
                  </p>
                </div>
                <div className="bg-[#FFF3CD] p-6 rounded-lg shadow-lg">
                  <FaSearch className="text-purple-600 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Brand Activation</h2>
                  <p>
                    We create unique brand activation experiences to engage your audience and create lasting impressions through innovative campaigns.
                  </p>
                </div>
                <div className="bg-[#FFF3CD] p-6 rounded-lg shadow-lg">
                  <FaHandshake className="text-purple-600 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Digital Desk – Staff Management</h2>
                  <p>
                    Our Digital Desk services help streamline staff management during events, offering real-time coordination, scheduling, and reporting to ensure everything runs smoothly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-orange-600">Frequently Asked Questions</h2>
              <div className="max-w-2xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <div
                      className="flex items-center justify-between p-4 bg-[#FFF3CD] border border-gray-300 rounded-lg shadow-md cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-xl font-semibold">{faq.question}</h3>
                      <div>
                        {activeIndex === index ? (
                          <FaArrowUp className="text-purple-500 text-xl" />
                        ) : (
                          <FaArrowDown className="text-purple-500 text-xl" />
                        )}
                      </div>
                    </div>
                    {activeIndex === index && (
                      <div className="p-4 bg-[#FFF3CD] border border-gray-300 rounded-lg">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold text-orange-600 mb-8">Get in Touch</h2>
            <a
              href="https://wa.me/7822857872" // Replace with your WhatsApp number
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-pink-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp className="mr-2 text-2xl" />
              Chat with Us on WhatsApp
            </a>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventManagementPage;
