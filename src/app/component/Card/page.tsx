import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="bg-offwhite min-h-screen flex flex-col items-center justify-center text-white">
      <div className="mx-4 md:mx-16">
        <div className="flex items-center justify-center my-8 relative">
          <div className="flex-grow h-1 bg-Brown"></div>
          <h1 className="text-Brown font-bold text-3xl text-center px-4">
            Explore the Coffee World
          </h1>
          <div className="flex-grow h-1 bg-Brown"></div>
        </div>

        {/* Centered Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-0 items-center justify-center">
          {/** Card 1 */}
          <div className="bg-lightBrown h-auto p-4 flex flex-col items-center rounded-md shadow-md space-y-5">
            <Image
              src="/card1.png"
              alt="Cappuccino"
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl font-bold my-4">Cappuccino</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi magnam amet voluptatum mollitia, dolorum delectus. Tempora, ipsam eligendi, voluptatum molestiae rem ex saepe fugiat magni veniam temporibus voluptas quae quod?
              </p>
            </div>
            <div className="flex items-center justify-between w-full mt-4 px-4">
              <p className="text-xl font-bold">$8.60</p>
              <button className="btn1 bg-Brown text-white px-4 py-2 rounded-md">
                Order Now
              </button>
            </div>
          </div>

          {/** Card 2 */}
          <div className="bg-lightBrown h-auto p-4 flex flex-col items-center rounded-md shadow-md space-y-5">
            <Image
              src="/card2.png"
              alt="Mocha"
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl font-bold my-4">Mocha</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi magnam amet voluptatum mollitia, dolorum delectus. Tempora, ipsam eligendi, voluptatum molestiae rem ex saepe fugiat magni veniam temporibus voluptas quae quod?
              </p>
            </div>
            <div className="flex items-center justify-between w-full mt-4 px-4">
              <p className="text-xl font-bold">$8.60</p>
              <button className="btn1 bg-Brown text-white px-4 py-2 rounded-md">
                Order Now
              </button>
            </div>
          </div>

          {/** Card 3 */}
          <div className="bg-lightBrown h-auto p-4 flex flex-col items-center rounded-md shadow-md space-y-5">
            <Image
              src="/card3.png"
              alt="Latte"
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl font-bold my-4">Latte</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi magnam amet voluptatum mollitia, dolorum delectus. Tempora, ipsam eligendi, voluptatum molestiae rem ex saepe fugiat magni veniam temporibus voluptas quae quod?
              </p>
            </div>
            <div className="flex items-center justify-between w-full mt-4 px-4">
              <p className="text-xl font-bold">$8.60</p>
              <button className="btn1 bg-Brown text-white px-4 py-2 rounded-md">
                Order Now
              </button>
            </div>
          </div>

          {/** Card 4 */}
          <div className="bg-lightBrown h-auto p-4 flex flex-col items-center rounded-md shadow-md space-y-5">
            <Image
              src="/card4.png"
              alt="Cold Java"
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl font-bold my-4">Cold Java</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi magnam amet voluptatum mollitia, dolorum delectus. Tempora, ipsam eligendi, voluptatum molestiae rem ex saepe fugiat magni veniam temporibus voluptas quae quod?
              </p>
            </div>
            <div className="flex items-center justify-between w-full mt-4 px-4">
              <p className="text-xl font-bold">$8.60</p>
              <button className="btn1 bg-Brown text-white px-4 py-2 rounded-md">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
