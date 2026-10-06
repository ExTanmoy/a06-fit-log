import React from "react";

const GlobalLoading = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-3">
        <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded-md w-3/4"></div>
        <div className="flex gap-2">
          <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
          <div className="h-6 w-24 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
        </div>
      </div>

      {/* Main Content / Video Container Skeleton */}
      <div className="w-full h-64 md:h-96 bg-slate-200 dark:bg-slate-700 rounded-2xl"></div>

      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl space-y-2"
          >
            <div className="h-4 w-12 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
          </div>
        ))}
      </div>

      {/* Instructions / Description Skeleton */}
      <div className="space-y-3 pt-4">
        <div className="h-6 w-1/3 bg-slate-200 dark:bg-slate-700 rounded"></div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="h-4 w-4/6 bg-slate-200 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoading;
