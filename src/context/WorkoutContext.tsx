"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export const workoutContext = createContext({});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    //Set initial state by reading data from local storage
  const [plan, setPlan] = useState<unknown[]>(() => {
    if (typeof window !== "undefined") {
      const savedPlan = localStorage.getItem("workout_plan");
      return savedPlan ? JSON.parse(savedPlan) : [];
    }
    return [];
  });

  const [save, setSave] = useState<unknown[]>(() => {
    if (typeof window !== "undefined") {
      const savedList = localStorage.getItem("workout_save");
      return savedList ? JSON.parse(savedList) : [];
    }
    return [];
  });

  // Update local storage if 'Plan' Change

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.getItem('workout_plan');
      localStorage.setItem('workout_plan', JSON.stringify(plan));
    }
  }, [plan]);


  // Update local storage if 'Saved' Change

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('workout_save', JSON.stringify(save));
    }
  }, [save]);

  
  const sharedData = {
    plan,
    setPlan,
    save,
    setSave,
  };
  return (
    <workoutContext.Provider value={sharedData}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;
