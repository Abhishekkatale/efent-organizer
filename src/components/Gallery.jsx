import React from 'react';
import S1 from '../assets/S1.JPG';
import S2 from '../assets/S2.JPG';
import S3 from '../assets/S3.JPG';
import S4 from '../assets/S4.JPG';
import S5 from '../assets/S5.JPG';
import S6 from '../assets/S6.JPG';



const GallerySection = () => {
  const images = [S1, S2, S3, S4, S5, S6];


  return (
    <section className="bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A] py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-orange-400">Our Work</h2>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12">
   
        {images.map((image, index) => (
          <div key={index} className="relative group">
            
            <img
              src={image}
              alt={`Work ${index + 1}`}
              className="w-full h-64 object-cover rounded-md shadow-lg transition-transform transform group-hover:scale-105"
            />
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default GallerySection;
