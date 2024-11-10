import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="bg-offwhite py-12 pt-28">
      <div className="mx-4 md:mx-16">
        <div className="flex justify-center items-center mb-10">
          <div className="flex-grow h-1 bg-Brown"></div>
          <h1 className="text-Brown font-bold text-3xl px-4">
            Brands We Work With
          </h1>
          <div className="flex-grow h-1 bg-Brown"></div>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16">
            <li className="flex justify-center w-[120px] sm:w-[160px] md:w-[200px] lg:w-[250px] mb-4">
              <Image 
                src="/brand1.png" 
                alt="Brand 1" 
                width={300} 
                height={200} 
                className="w-full h-auto" 
              />
            </li>
            <li className="flex justify-center w-[120px] sm:w-[160px] md:w-[200px] lg:w-[250px] mb-4">
              <Image 
                src="/brand2.png" 
                alt="Brand 2" 
                width={300} 
                height={200} 
                className="w-full h-auto" 
              />
            </li>
            <li className="flex justify-center w-[120px] sm:w-[160px] md:w-[200px] lg:w-[250px] mb-4">
              <Image 
                src="/brand3.png" 
                alt="Brand 3" 
                width={300} 
                height={200} 
                className="w-full h-auto" 
              />
            </li>
            <li className="flex justify-center w-[120px] sm:w-[160px] md:w-[200px] lg:w-[250px] mb-4">
              <Image 
                src="/brand4.png" 
                alt="Brand 4" 
                width={300} 
                height={200} 
                className="w-full h-auto" 
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brands;
