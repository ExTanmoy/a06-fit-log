"use client";

import { workoutContext } from "@/context/WorkoutContext";
import { IWorkoutType } from "@/types/workout-type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaFire, FaStar } from "react-icons/fa";
import { TiStopwatch } from "react-icons/ti";
import { toast } from "react-toastify";

const MyPlanPage = () => {
  const { plan, setPlan, save, setSave } = useContext(workoutContext) as {
    plan: IWorkoutType[];
    setPlan: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
    save: IWorkoutType[];
    setSave: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
  };
//   console.log("todayplan", plan);
//   console.log("save", save);

//   Active Tab state
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const isSaved = activeTab === "saved";


    //   state of mark as done of plan
  const [doneById, setDoneById] = useState<number[]>([]);

  const handleToggleDoneId = (id: number) => {
    const isDone = doneById.includes(id);

    if (isDone) {
      setDoneById((prev) => prev.filter((doneId) => doneId !== id));
      toast.info("Undone");
      return;
    }
    console.log(doneById, '=> Done by id')
    setDoneById((prev) => [...prev, id]);
    toast.success("Marked as done");
  };
  

  //   Remove Handler of Plan Tab
  const handleRemovePlan = (p: IWorkoutType) => {
      setPlan((prevPlan) => prevPlan.filter((plan) => plan.id !== p.id));
      toast.info(`${p.name} is removed from Today's Plan`)
  }

  //   Remove Handler of Saved Tab
  const handleRemoveSave = (s: IWorkoutType) => {
      setSave((prevSave) => prevSave.filter((save) => save.id !== s.id));
      toast.info(`${s.name} is removed from Saved`)
  }
  
  

  // Exercise Duration (Minutes) (Both)
  const planMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );
  const saveMinutes = save.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  // Exercise Calories
  const planCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );
  const saveCalories = save.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    // Heading
    <section className="container mx-auto pt-15 px-4 sm:px-6 lg:px-8">
      <h1 className="font-oswald text-4xl sm:text-5xl font-bold ">MY PLAN</h1>
      <p className="font-inter text-[#c4c8d3] text-sm mt-3">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Workout Statistics / Metrics */}

      <div className="bg-base-200 rounded-2xl my-10 grid grid-cols-1 md:grid-cols-3 ">
        <div className="p-5 space-y-2 border-r border-dashed border-gray-700">
          <p className=" text-[#c4c8d3] text-xs font-inter">Exercises</p>
          <h2 className="text-3xl font-bold text-accent font-inter">
            {!isSaved ? plan.length : save.length}
          </h2>
        </div>
        <div className="p-5 space-y-2 border-r border-dashed border-gray-700 ">
          <p className=" text-[#c4c8d3] text-xs font-inter">Exercises</p>
          <h2 className="text-3xl font-bold font-inter">
            {!isSaved ? planMinutes : saveMinutes}
          </h2>
        </div>
        <div className="p-5 space-y-2 ">
          <p className=" text-[#c4c8d3] text-xs font-inter">Exercises</p>
          <h2 className="text-3xl font-bold font-inter">
            {!isSaved ? planCalories : saveCalories}
          </h2>
        </div>
      </div>

      {/* Tab Area */}
      <div className="py-4">
        {/* Tab Button Container */}
        <div className="inline-flex items-center bg-base-200 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
              activeTab === "plan"
                ? "bg-black text-accent shadow-md"
                : "text-gray-500 hover:text-white cursor-pointer"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
              activeTab === "saved"
                ? "bg-black text-accent shadow-md"
                : "text-gray-500 hover:text-white cursor-pointer"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="mt-6">

          {/* -------------------------------- Today's Plan Area --------------------------------- */}
          {activeTab === "plan" && (

            plan.length > 0 ? (
            <div className="space-y-5">
              {plan.map((p) => {
                const isDone = doneById.includes(p.id)
                return(
                <div
                  key={p.id}
                  className="p-4 bg-base-200 border border-gray-800 rounded-xl text-white"
                >
                  <div className="grid grid-cols-2 justify-between">

                    {/* Left Side - Image & Info */}
                    <div className="flex gap-4">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={150}
                        height={100}
                        className="h-20 w-30 rounded-xl object-cover"
                      />
                      <div className="space-y-1">
                        <div className="flex gap-4 items-center">
                            <h3 className={`text-xl font-bold font-oswald tracking-wide transition-all ${
                            isDone ? 'line-through text-gray-400' : 'text-white'
                            }`}>
                            {p.name}
                            </h3>

                            {/* Done Badge */}
                            {isDone && (
                                <span className="bg-accent-bg text-[#679e15] font-inter text-[10px] font-bold px-2 py-0.5 border rounded-lg ">DONE</span>
                            )}
                        </div>

                        <p className=" text-sm text-gray-400">{p.equipment}</p>

                        {/* Duration, Calory & Rating */}
                        <div className="flex items-center gap-3 mt-3 text-sm">
                            <span className="flex items-center gap-1 ">
                                <TiStopwatch className="text-accent"/> {p.duration}
                            </span>
                            <span className="flex items-center gap-1 ">
                                <FaFire className="text-accent"/> {p.caloriesBurned}
                            </span>
                            <span className="flex items-center gap-1 te">
                                <FaStar className="text-accent"/> {p.rating}
                            </span>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Action Button */}
                    <div className="flex gap-2 items-center justify-end">
                        <Link href={`/workout-info/${p.id}`}>
                            <button className="text-sm font-semibold font-inter border border-white rounded-full px-3 py-2 hover:bg-gray-600 cursor-pointer">View Details</button>
                        </Link>
                      
                      <button 
                        onClick={() => handleToggleDoneId(p.id)}
                        className={`text-sm font-semibold text-black font-inter border rounded-full px-3 py-2 bg-accent hover:bg-[#9ab32d] transition-all duration-200 cursor-pointer ${
                            isDone
                                ? 'opacity-50'
                                : ''
                        }`}>  {isDone ? '✔ Completed' : 'Mark as Done'}</button>
                      <CiCircleRemove 
                        onClick={() =>handleRemovePlan(p)}
                        className="text-4xl text-red-400 hover:text-red-700 cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>
               )
            })}
            </div> )
            :
          ( 
            <div className="container mx-auto bg-base-200 p-10 text-center space-y-3 rounded-2xl">
              <h3 className="text-xl text-amber-50 font-medium font-oswald uppercase tracking-wider">Nothing here yet </h3>
              <p className="font-inter text-[#c4c8d3]">Browse the library and add a lift to get today moving.</p>
              <Link href='/'>
                <button className="bg-accent hover:bg-[#9ab32d] cursor-pointer text-black text-sm font-semibold px-3 py-2 rounded-2xl font-inter"> Go to workouts </button>
              </Link>
            </div>
          )
          )}


        {/* -----------------------------     Saved For Later Area     ----------------------- */}

          {activeTab === "saved" && (
            <div className="space-y-5">
              {save.map((s) => {
                
                return(
                <div
                  key={s.id}
                  className="p-4 bg-base-200 border border-gray-800 rounded-xl text-white"
                >
                  <div className="grid grid-cols-2 justify-between">

                    {/* Left Side - Image & Info */}
                    <div className="flex gap-4">
                      <Image
                        src={s.image}
                        alt={s.name}
                        width={150}
                        height={100}
                        className="h-20 w-30 rounded-xl object-cover"
                      />
                      <div className="space-y-1">
                        <div className="flex gap-4 items-center">
                            <h3 className="text-xl font-bold font-oswald tracking-wide transition-all">
                            {s.name}
                            </h3>
                        </div>

                        <p className=" text-sm text-gray-400">{s.equipment}</p>

                        {/* Duration, Calory & Rating */}
                        <div className="flex items-center gap-3 mt-3 text-sm">
                            <span className="flex items-center gap-1 ">
                                <TiStopwatch className="text-accent"/> {s.duration}
                            </span>
                            <span className="flex items-center gap-1 ">
                                <FaFire className="text-accent"/> {s.caloriesBurned}
                            </span>
                            <span className="flex items-center gap-1 te">
                                <FaStar className="text-accent"/> {s.rating}
                            </span>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Action Button */}
                    <div className="flex gap-2 items-center justify-end">
                      <Link href={`/workout-info/${s.id}`}>
                          <button className="text-sm font-semibold font-inter border border-white rounded-full px-3 py-2 hover:bg-gray-600 cursor-pointer">View Details</button>
                      </Link>
                      
                      <CiCircleRemove 
                        onClick={() =>handleRemoveSave(s)}
                        className="text-4xl text-red-400 hover:text-red-700 cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>
               )
            })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyPlanPage;
