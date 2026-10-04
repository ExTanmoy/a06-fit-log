"use client";

import { workoutContext } from "@/context/WorkoutContext";
import { IWorkoutType } from "@/types/workout-type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";

const MyPlanPage = () => {
  const { plan, setPlan, save, setSave } = useContext(workoutContext) as {
    plan: IWorkoutType[];
    setPlan: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
    save: IWorkoutType[];
    setSave: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
  };
  console.log("todayplan", plan);
  console.log("save", save);

//   Active Tab state

  const [activeTab, setActiveTab] = useState<"plan" | "save">("plan");
  const isSave = activeTab === "save";

    //   state of mark as done
  const [doneById, setDoneById] = useState<number[]>([]);

  const handleToggleDoneId = (id: number) => {
    setDoneById((prev) => 
    prev.includes(id) ? prev.filter((doneId) => doneId !== id) :[...prev, id]
    )
  }

    //   Remove Handler of Plan
    const handleRemovePlan = (id: number) => {
        setPlan((prevPlan) => prevPlan.filter((plan) => plan.id !== id));
    }
    
  

  // Exercise Duration (Minutes)
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
            {!isSave ? plan.length : save.length}
          </h2>
        </div>
        <div className="p-5 space-y-2 border-r border-dashed border-gray-700 ">
          <p className=" text-[#c4c8d3] text-xs font-inter">Exercises</p>
          <h2 className="text-3xl font-bold font-inter">
            {!isSave ? planMinutes : saveMinutes}
          </h2>
        </div>
        <div className="p-5 space-y-2 ">
          <p className=" text-[#c4c8d3] text-xs font-inter">Exercises</p>
          <h2 className="text-3xl font-bold font-inter">
            {!isSave ? planCalories : saveCalories}
          </h2>
        </div>
      </div>

      {/* Tab Area */}
      <div className="p-4">
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
            onClick={() => setActiveTab("save")}
            className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
              activeTab === "save"
                ? "bg-black text-accent shadow-md"
                : "text-gray-500 hover:text-white cursor-pointer"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="mt-6">
          {/* Today's Plan Area */}
          {activeTab === "plan" && (
            <div className="space-y-5">
              {plan.map((p) => {
                const isDone = doneById.includes(p.id)
                return(
                <div
                  key={p.id}
                  className="p-4 bg-base-200 border border-gray-800 rounded-xl text-white"
                >
                  <div className="grid grid-cols-2 justify-between">
                    <div className="flex gap-4">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={150}
                        height={100}
                        className="h-20 w-30 rounded-xl object-cover"
                      />
                      <div>
                        <div className="flex gap-4 items-center">
                            <h3 className={`text-lg font-bold font-oswald tracking-wide transition-all ${
                            isDone ? 'line-through text-gray-400' : 'text-white'
                            }`}>
                            {p.name}
                            </h3>

                            {/* Done Badge */}
                            {isDone && (
                                <span className="bg-accent-bg text-[#679e15] font-inter text-[10px] font-bold px-2 py-0.5 border rounded-lg ">DONE</span>
                            )}
                        </div>
                        <p>{p.equipment}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 items-center justify-end">
                        <Link href={`/workout-info/${p.id}`}>
                            <button className="text-sm font-semibold font-inter border border-white rounded-full px-3 py-2 hover:bg-gray-600">View Details</button>
                        </Link>
                      
                      <button 
                        onClick={() => handleToggleDoneId(p.id)}
                        className={`text-sm font-semibold font-inter border rounded-full px-3 py-2 bg-accent hover:bg-[#9ab32d] transition-all duration-200 ${
                            isDone
                                ? ' text-[#106e04]'
                                : ' text-black'
                        }`}>  {isDone ? '✔ Completed' : 'Mark as Done'}</button>
                      <CiCircleRemove 
                        onClick={() =>handleRemovePlan(p.id)}
                        className="text-4xl text-red-400 hover:text-red-700" 
                      />
                    </div>
                  </div>
                </div>
               )
            })}
            </div>
          )}

          {/* Saved Area */}
          {activeTab === "save" && (
            <div>
              <p>save</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyPlanPage;
