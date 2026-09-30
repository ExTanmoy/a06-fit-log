import { IWorkoutType } from "@/types/workout-type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IWorkoutCardProps {
  card: IWorkoutType;
}
const WorkoutCard = ({ card }: IWorkoutCardProps) => {
  return (
    <Link href={`/workout-info/${card.id}`}>
      <div className="overflow-hidden rounded-lg border border-gray-700/70 bg-[#191c21] transition duration-300 hover:-translate-y-1 hover:border-lime-400/60">
        {/* ---------- Image ---------- */}
        <div className="h-60 w-full overflow-hidden">
          <Image
            src={card.image}
            alt={card.name}
            width={740}
            height={740}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* ---------- Card Content ---------- */}
        <div className="p-3">
          {/* Muscle Group Badges */}
          <div className="mb-2 flex flex-wrap gap-1.5">
            {card.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
            {card.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 text-[10px] text-gray-500">{card.equipment}</p>

          {/* Workout Stats */}
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] text-gray-300">
            {/* Duration */}
            <div className="flex items-center gap-1">
              <span className="text-lime-400">◷</span>
              <span>{card.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1">
              <span className="text-lime-400">◉</span>
              <span>{card.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <span className="text-lime-400">★</span>
              <span>{card.rating}</span>
            </div>
          </div>

          {/* Sets & Reps */}
          <div className="mt-2 flex items-center justify-between border-t border-gray-700 pt-2 text-[10px]">
            <span className="text-gray-500">
              Sets:{" "}
              <span className="font-semibold text-gray-300">{card.sets}</span>
            </span>

            <span className="text-gray-500">
              Reps:{" "}
              <span className="font-semibold text-gray-300">{card.reps}</span>
            </span>

            <span className="text-gray-500">
              Difficulty:{" "}
              <span className="font-semibold text-lime-400">
                {card.difficulty}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
