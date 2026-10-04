'use client';
import { workoutContext } from "@/context/WorkoutContext";
import { IWorkoutType } from "@/types/workout-type";
import React, { useContext } from "react";

const PlanButton = ({workout}: {workout:IWorkoutType}) => {
    const {plan, setPlan} = useContext(workoutContext) as {
      plan: IWorkoutType[];
      setPlan: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
    };
    

    const handlePlan = () => {
        
        console.log("current today plan", plan);
        console.log("Workout plan", workout);
        
        setPlan([...plan, workout]);
    }
  return (
    <button 
    className="rounded-lg bg-lime-400 px-4 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300"
    onClick={() => handlePlan()}
    >
      ＋ Add to today&apos;s plan
    </button>
  );
};

export default PlanButton;
