import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="hero bg-base-200 min-h-[80vh] rounded-2xl">
        <div className="hero-content flex-col lg:flex-row gap-5 ml-6">
          

            {/* Banner Content */}
          <div className="lg:w-4/7 space-y-4 ">
            <p className="text-accent text-xs font-bold tracking-widest">WORKOUT LIBRARY</p>
            <h1 className="text-4xl font-semibold font-oswald uppercase leading-tight sm:text-5xl lg:text-6xl">
                Train with intent. Log 
                <br />
                every set.
            </h1>
            <p className="py-6 text-[#c4c8d3] font-inter">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <a href="#library">
              <button className="btn  bg-accent text-black font-bold hover:bg-[#9ab32d]">Browse Workouts</button>
            </a>
            
          </div>

            {/* Banner Image */}
          <Image alt="Fitlog Banner" src={banner} width={500} className="lg:w-3/7"/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
