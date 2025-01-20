import React, { useState } from 'react';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className={`absolute inset-0 w-full h-full object-cover brightness-[1.2] transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        src={require("../assets/vid.webm")} // Make sure to optimize video format
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // Preload the video for faster loading
        onCanPlayThrough={() => setVideoLoaded(true)} // Ensures the video is fully loaded
      ></video>

      {/* Overlay for darker effect */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-5"></div>
    </section>
  );
};

export default Hero;
