'use client';
import { workoutContext } from "@/context/WorkoutContext";
import { useIsMounted } from "@/hooks/useIsmounted";
import { IWorkoutType } from "@/types/workout-type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveButton = ({workout}: {workout:IWorkoutType}) => {
    const {save, setSave} = useContext(workoutContext) as {
      save: IWorkoutType[];
      setSave: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
    };
    
    const isExistSave = save.some((item) => item.id === workout.id);
    const handleSave = () => {
        

        if (isExistSave){
          return;
        }
        toast.success(`${workout.name} is saved for later`)
        setSave([...save, workout]);
    }

      // hydration error solving
      const isMounted = useIsMounted();
      if(!isMounted){
        return null;
      }    

  return (
    <button 
      onClick={handleSave}
      disabled={isExistSave}
      className="rounded-lg px-4 py-2.5 text-sm font-bold text-white transition hover:bg-gray-900 border border-amber-50 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
    > 
      {isExistSave === false ? "Save for later": "✔ Already saved" }
    </button>
  );
};

export default SaveButton;
