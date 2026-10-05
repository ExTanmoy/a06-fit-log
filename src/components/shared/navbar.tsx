'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { workoutContext } from "@/context/WorkoutContext";
import { IWorkoutType } from "@/types/workout-type";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const {plan, save} = useContext(workoutContext) as {
    plan: IWorkoutType[];
    save: IWorkoutType[];
  }

  // Pathname for active
  const pathname = usePathname();

//Hydration error solving
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() =>{
    const timer = setTimeout(() =>{
      setIsMounted(true);
    }, 0)
    return () => clearTimeout(timer)
  }, []);

  // Hydration error solving (But showing error in eslint)
  // const [isMounted, setIsMounted] = useState(false);
  // useEffect(() =>{
  //   setIsMounted(true);
  // }, [])
  
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
          <Link 
            href="/" 
            className={pathname === '/' ? 'text-accent font-bold bg-accent-bg px-3 py-2 rounded-xl transition-all duration-200' : ''}
          >
            Workouts
          </Link>
          <Link 
            href="/my-plan"
            className={pathname === '/my-plan' ? 'text-accent font-bold bg-accent-bg px-3 py-2 rounded-xl transition-all duration-200' : ''}
          >
            My Plan
          </Link>
        </div>

        {/* Right Side  */}
        <div className="flex items-center gap-4 text-sm font-medium sm:gap-5 font-inter">
          <Link href="/my-plan">
            Plan <span className="bg-accent rounded-full px-3 py-1 text-black font-bold">{isMounted ? plan.length : 0}</span>
          </Link>
          <Link href="/my-plan">
            Save <span className="border border-white rounded-full px-3 py-1 text-white font-bold">{isMounted ? save.length : 0}</span>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
