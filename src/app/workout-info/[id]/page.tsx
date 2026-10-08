import PlanButton from "@/components/Buttons/PlanButton";
import SaveButton from "@/components/Buttons/SaveButton";
import { IWorkoutType } from "@/types/workout-type";
import Image from "next/image";

interface IWorkoutInfoPageParams {
  id: string;
}

interface IWorkoutInfoPage {
  params: Promise<IWorkoutInfoPageParams>;
}

const getLibrary = async (): Promise<IWorkoutType[]> => {
  try {
    const response: Response = await fetch(
      "https://api.abcz.workers.dev/api/fitlog",
    );

    const data: IWorkoutType[] = await response.json();
    return data;
  } catch {
    return [];
  }
};

const WorkoutInfoPage = async ({ params }: IWorkoutInfoPage) => {
  const { id } = await params;

  const libraryData: IWorkoutType[] = await getLibrary();

  const workout: IWorkoutType | undefined = libraryData.find(
    (card: IWorkoutType): boolean => card.id === Number(id),
  );

  if (!workout) {
    return (
      <main className="min-h-screen bg-[#0d0f12] px-4 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-2xl font-bold">Workout not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-8 pt-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* ================= IMAGE ================= */}
          <div className="lg:sticky lg:top-25 overflow-hidden rounded-xl border border-gray-700/70 bg-[#191c21]">
            <Image
              src={workout.image}
              alt={workout.name}
              width={740}
              height={740}
              className="h-125 w-full object-cover sm:h-150 lg:h-164"
            />
          </div>

          {/* ================= WORKOUT INFO ================= */}
          <div className="pt-1">
            {/* Title */}
            <h1 className="text-3xl font-black uppercase tracking-wide sm:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-300">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= STATS ================= */}
            <div className="mt-5 overflow-hidden rounded-xl border border-gray-700/70 bg-[#191c21]">
              {/* Equipment */}
              <div className="grid grid-cols-2 border-b border-gray-700/70">
                <div className="px-3 py-4">
                  <p className="text-[11px] font-bold uppercase text-gray-300">
                    Equipment
                  </p>
                </div>

                <div className="px-3 py-4 text-sm text-gray-100">
                  {workout.equipment}
                </div>
              </div>

              {/* Difficulty */}
              <div className="grid grid-cols-2 border-b border-gray-700/70">
                <div className="px-3 py-4">
                  <p className="text-[11px] font-bold uppercase text-gray-300">
                    Difficulty
                  </p>
                </div>

                <div className="px-3 py-4 text-sm text-gray-100">
                  {workout.difficulty}
                </div>
              </div>

              {/* Sets */}
              <div className="grid grid-cols-2 border-b border-gray-700/70">
                <div className="px-3 py-4">
                  <p className="text-[11px] font-bold uppercase text-gray-300">
                    Sets
                  </p>
                </div>

                <div className="px-3 py-4 text-sm text-gray-100">
                  {workout.sets}
                </div>
              </div>

              {/* Reps */}
              <div className="grid grid-cols-2 border-b border-gray-700/70">
                <div className="px-3 py-4">
                  <p className="text-[11px] font-bold uppercase text-gray-300">
                    Reps
                  </p>
                </div>

                <div className="px-3 py-4 text-sm text-gray-100">
                  {workout.reps}
                </div>
              </div>

              {/* Duration */}
              <div className="grid grid-cols-2 border-b border-gray-700/70">
                <div className="px-3 py-4">
                  <p className="text-[11px] font-bold uppercase text-gray-300">
                    Duration
                  </p>
                </div>

                <div className="px-3 py-4 text-sm text-gray-100">
                  {workout.duration} min
                </div>
              </div>

              {/* Calories */}
              <div className="grid grid-cols-2 border-b border-gray-700/70">
                <div className="px-3 py-4">
                  <p className="text-[11px] font-bold uppercase text-gray-300">
                    Calories
                  </p>
                </div>

                <div className="px-3 py-4 text-sm text-gray-100">
                  {workout.caloriesBurned} kcal
                </div>
              </div>

              {/* Rating */}
              <div className="grid grid-cols-2">
                <div className="px-3 py-4">
                  <p className="text-[11px] font-bold uppercase text-gray-300">
                    Rating
                  </p>
                </div>

                <div className="flex items-center gap-1 px-3 py-4 text-sm text-gray-100">
                  <span className="text-lime-400">★</span>
                  {workout.rating}
                </div>
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-7">
              <h2 className="text-2xl font-black uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {workout.instructions.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-2 text-sm leading-6 text-gray-200"
                    >
                      <span className="font-bold text-accent">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ),
                )}
              </ol>
            </div>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="mt-6 flex flex-wrap gap-3">
              <PlanButton workout={workout}></PlanButton>

              <SaveButton workout={workout}></SaveButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutInfoPage;
