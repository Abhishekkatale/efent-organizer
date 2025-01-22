import React, { useState } from "react";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex items-center justify-center bg-black "
    >
      {/* Video Container */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] overflow-hidden"
      >
        {/* Video */}
        <video
          className={`absolute inset-0 w-full h-full object-cover brightness-[1.2] transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={require("../assets/vid.webm")} // Ensure video is optimized
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlayThrough={() => setVideoLoaded(true)}
        ></video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-white">
      </div>
    </section>
  );
};

export default Hero;
