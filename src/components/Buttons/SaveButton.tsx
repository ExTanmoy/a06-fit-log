'use client';
import { workoutContext } from "@/context/WorkoutContext";
import { IWorkoutType } from "@/types/workout-type";
import React, { useContext } from "react";

const SaveButton = ({workout}: {workout: IWorkoutType}) => {

    const {save, setSave} = useContext(workoutContext)

    const handleSave = () => {
        
        console.log('Save button clicked', save)
        console.log('workout save' , workout)
        
        setSave([...save, workout])
        
    }

  return (


    <button 
    className="rounded-lg border border-gray-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
    onClick={() => handleSave()}
    >
      ♡ Save for later
    </button>
  );
};

export default SaveButton;
