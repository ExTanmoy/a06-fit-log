import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0C0F12] text-white flex flex-col items-center justify-center px-4 text-center">
      {/* Big 404 Heading */}
      <h1 className="text-7xl md:text-8xl font-extrabold text-accent tracking-tight mb-2">
        404
      </h1>

      {/* Main Title */}
      <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wide mb-3">
        Page Not Found
      </h2>

      {/* Subtitle / Description */}
      <p className="text-gray-400 text-sm md:text-base max-w-md mb-8 leading-relaxed">
        The page you wanted is not in the library. Head back to the floor and pick a workout that exists.
      </p>

      {/* Button */}
      <Link
        href="/workouts"
        className="bg-accent text-black font-semibold px-6 py-2.5 rounded-full hover:bg-[#8ece28] transition-colors duration-200 text-sm md:text-base"
      >
        Go to workouts
      </Link>
    </div>
  );
}