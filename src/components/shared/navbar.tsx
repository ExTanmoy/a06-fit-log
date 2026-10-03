import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className=" sticky top-0 z-50 border-b border-[#22262e] bg-[#0e0f0f] backdrop-blur">
      <section className="container mx-auto flex justify-between items-center h-14 sm:h-20 px-4 sm:px-6 lg:px-8">
        <div>
          {/* Left side (logo) */}
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="fitlog logo" />
            <span className="text-lg font-bold tracking-wide font-oswald"> FITLOG </span>
          </Link>
        </div>

        {/* Center (NavLinks) */}
        <div className="flex items-center gap-4 font-inter text-sm font-medium sm:gap-5">
          <Link href="/saved">Workouts</Link>
          <Link href="/my-plan">My Plan</Link>
          <Link href="/workout-info/2">info</Link>
        </div>

        {/* Right Side  */}
        <div className="flex items-center gap-4 text-sm font-medium sm:gap-5 font-inter">
          <a href="">Plan</a>
          <a href="">Saved</a>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
