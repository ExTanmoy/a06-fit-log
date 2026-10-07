'use client';
import { workoutContext } from "@/context/WorkoutContext";
import { useIsMounted } from "@/hooks/useIsmounted";
import { IWorkoutType } from "@/types/workout-type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const PlanButton = ({workout}: {workout:IWorkoutType}) => {
    const {plan, setPlan} = useContext(workoutContext) as {
      plan: IWorkoutType[];
      setPlan: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
    };
    
    const isExistPlan = plan.some((item) => item.id === workout.id);
    
    const handlePlan = () => {
        
        // console.log("current today plan", plan);
        // console.log("Workout plan", workout);

        if (isExistPlan){
          // toast.info(`${workout.name} is already in your Today's Plan`)
          return;
        }
        toast.success(`${workout.name} is added in your Today's Plan`)
        setPlan((prev) => {
        if (prev.length >= 5) {
          return prev;
        }

        return [...prev, workout];
      });
    }
    
      // hydration error solving
      const isMounted = useIsMounted();
      if(!isMounted){
        return null;
      }

  return (
    <button 
      onClick={handlePlan}
      disabled={isExistPlan || plan.length >= 5}
      className="rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-black transition hover:bg-lime-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
    > 
      {isExistPlan ? "✔ Already added in your plan" : plan.length >= 5 ? "Plan is full (5/5)" : "Add to today's plan" }
    </button>
  );
};

export default PlanButton;
