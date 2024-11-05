import React from 'react';

const BannerContent = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] space-y-6 text-center px-4 pt-20 relative z-10">
      <h1 className="text-offwhite font-bold text-4xl md:text-6xl lg:text-8xl">Power up with coffee</h1>
      <p className="text-lg md:text-2xl lg:text-3xl text-slate-300">
        Start your exciting day with a cup of Brew Coffee
      </p>
      <button className="bg-Brown text-white px-10 md:px-20 py-2 md:py-3 text-lg md:text-2xl rounded-2xl">
        Explore Us
      </button>
    </div>
  );
};

export default BannerContent;
