import React from "react";
import WorkoutCard from "./WorkoutCard";
import { IWorkoutType } from "@/types/workout-type";

const getLibrary = async () => {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/fitlog"
  );

  const data = await response.json();
  return data;
};

const Library = async () => {
  const libraryData = await getLibrary();
  console.log(libraryData)

  return (
    <section className="container mx-auto">
      <div className=" text-white py-8 px-4 sm:px-6 lg:px-8">

        {/* ================= Heading ================= */}
        <div className="mb-6">
          <h2 className="text-2xl font-black tracking-wide uppercase sm:text-3xl">
            THE LIBRARY
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* ================= Workout Cards ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {libraryData.map((card:IWorkoutType) => {
            return <WorkoutCard key={card.id} card={card}></WorkoutCard>
          })}
        </div>
      </div>
    </section>
  );
};

export default Library;