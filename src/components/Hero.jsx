import React, { useState } from 'react';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      {!videoLoaded && (
        <img
          src={require("../assets/annual.JPG")} // Add a placeholder image
          alt="Video Placeholder"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
      )}
      <video
        className={`absolute inset-0 w-full h-full object-cover brightness-[1.2] transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        src={require("../assets/vid.MP4")}
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setVideoLoaded(true)} // Ensures the video is fully loaded
      ></video>

      {/* Overlay for darker effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-5"></div>
    </section>
  );
};

export default Hero;
