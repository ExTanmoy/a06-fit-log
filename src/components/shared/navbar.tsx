'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import logo from "@/assets/logo.png";
import { workoutContext } from "@/context/WorkoutContext";
import { IWorkoutType } from "@/types/workout-type";
import { usePathname } from "next/navigation";
import { useIsMounted } from "@/hooks/useIsmounted";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { plan, save } = useContext(workoutContext) as {
    plan: IWorkoutType[];
    save: IWorkoutType[];
  };

  // Pathname for active link
  const pathname = usePathname();

  // Hydration error solving
  const isMounted = useIsMounted();
  if (!isMounted) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[#22262e] bg-[#0e0f0f] backdrop-blur">
      <section className="container mx-auto flex justify-between items-center h-14 sm:h-20 px-4 sm:px-6 lg:px-8 relative">
        
        {/* Left Side: Mobile Hamburger + Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Navigation"
            className="sm:hidden text-white text-xl p-1 focus:outline-none"
          >
            <GiHamburgerMenu />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3" onClick={() => setIsOpen(false)}>
            <Image src={logo} alt="fitlog logo" className="w-6 h-6 sm:w-8 sm:h-8" priority />
            <span className="text-lg sm:text-xl font-bold tracking-wide font-oswald text-white"> FITLOG </span>
          </Link>
        </div>

        {/* Center: NavLinks (Desktop only) */}
        <div className="hidden sm:flex items-center gap-4 font-inter text-sm font-medium sm:gap-5">
          <Link 
            href="/" 
            className={pathname === '/' ? 'text-accent font-bold bg-accent-bg px-3 py-2 rounded-xl transition-all duration-200' : 'text-gray-300 hover:text-white'}
          >
            Workouts
          </Link>
          <Link 
            href="/my-plan"
            className={pathname === '/my-plan' ? 'text-accent font-bold bg-accent-bg px-3 py-2 rounded-xl transition-all duration-200' : 'text-gray-300 hover:text-white'}
          >
            My Plan
          </Link>
        </div>

        {/* Right Side: Plan & Saved Counters (Visible on BOTH Mobile and Desktop) */}
        <div className="flex items-center gap-3 text-xs sm:text-sm font-medium sm:gap-5 font-inter">
          <Link href="/my-plan" className="flex items-center gap-1.5 sm:gap-2 text-white">
            Plan <span className="bg-accent text-black font-bold text-xs sm:text-sm px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">{plan.length}</span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-1.5 sm:gap-2 text-white">
            Saved <span className="border border-white text-white font-bold text-xs sm:text-sm px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">{save.length}</span>
          </Link>
        </div>

        {/* Mobile Floating Dropdown Menu */}
        {isOpen && (
          <div className="sm:hidden absolute top-14 left-4 z-50 w-48 rounded-2xl bg-[#16181a] border border-[#22262e] p-3 shadow-xl flex flex-col gap-1 font-inter">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/' ? 'text-accent font-bold bg-accent-bg' : 'text-gray-300 hover:text-white hover:bg-[#22262e]'
              }`}
            >
              Workouts
            </Link>
            <Link 
              href="/my-plan"
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/my-plan' ? 'text-accent font-bold bg-accent-bg' : 'text-gray-300 hover:text-white hover:bg-[#22262e]'
              }`}
            >
              My Plan
            </Link>
          </div>
        )}

      </section>
    </nav>
  );
};

export default Navbar;