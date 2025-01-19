import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-[1.2]" // Video size adjustments
        src={require("../assets/vid.MP4")}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay for darker effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-5"></div> {/* Adjusted opacity */}
    </section>
  );
};

export default Hero;
