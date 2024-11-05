import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="bg-offwhite">
      <div className="mx-4 md:mx-16">
        <div className="flex justify-center items-center mb-4">
          <div className="flex-grow h-1 bg-Brown"></div>
          <h1 className="text-Brown font-bold text-3xl text-center px-4">
            Brands we work with
          </h1>
          <div className="flex-grow h-1 bg-Brown"></div>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center items-center space-x-4 md:space-x-20">
            <li className="mb-4 md:mb-0">
              <Image 
                src="/brand1.png" 
                alt="Brand 1" 
                width={200} 
                height={200} 
                className="max-w-[200px] md:max-w-[300px] h-auto" 
              />
            </li>
            <li className="mb-4 md:mb-0">
              <Image 
                src="/brand2.png" 
                alt="Brand 2" 
                width={200} 
                height={200} 
                className="max-w-[200px] md:max-w-[300px] h-auto" 
              />
            </li>
            <li className="mb-4 md:mb-0">
              <Image 
                src="/brand3.png" 
                alt="Brand 3" 
                width={200} 
                height={200} 
                className="max-w-[200px] md:max-w-[300px] h-auto" 
              />
            </li>
            <li className="mb-4 md:mb-0">
              <Image 
                src="/brand4.png" 
                alt="Brand 4" 
                width={200} 
                height={200} 
                className="max-w-[200px] md:max-w-[300px] h-auto" 
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brands;
