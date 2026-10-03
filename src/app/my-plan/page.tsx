'use client';

import { workoutContext } from '@/context/WorkoutContext';
import { IWorkoutType } from '@/types/workout-type';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {
    
    const { plan, save } = useContext(workoutContext) as { plan: IWorkoutType[]; save: IWorkoutType[] };
    console.log("todayplan", plan);
    console.log('save', save);

    const [activeTab, setActiveTab] = useState< 'plan' | 'save' >('plan');
    const isSave = activeTab === 'save';

        // Exercise Duration (Minutes)
    const planMinutes = plan.reduce((total, workout) => total + workout.duration, 0);
    const saveMinutes = save.reduce((total, workout) => total + workout.duration, 0);

        // Exercise Calories
    const planCalories = plan.reduce((total, workout) => total + workout.caloriesBurned, 0);
    const saveCalories = save.reduce((total, workout) => total + workout.caloriesBurned, 0);

    return (

        // Heading
        <section className='container mx-auto pt-15 px-4 sm:px-6 lg:px-8'>
            <h1 className='font-oswald text-4xl sm:text-5xl font-bold '>MY PLAN</h1>
            <p className='font-inter text-[#c4c8d3] text-sm mt-3'>Cap of five lifts for today. Finish them, then load more.</p>

            {/* Workout Statistics / Metrics */}

            <div className='bg-base-200 rounded-2xl my-10 grid grid-cols-1 md:grid-cols-3'>
                
                <div className='p-5 space-y-2 border-r border-dashed border-gray-700 gap-5'>
                    <p  className=' text-[#c4c8d3] text-xs font-inter'>Exercises</p>
                    <h2 className='text-3xl font-bold text-accent font-inter'>
                        {!isSave ? plan.length : save.length}
                    </h2>
                </div>
                <div className='p-5 space-y-2 border-r border-dashed border-gray-700 gap-5'>
                    <p  className=' text-[#c4c8d3] text-xs font-inter'>Exercises</p>
                    <h2 className='text-3xl font-bold font-inter'>
                        {!isSave ? planMinutes : saveMinutes}
                    </h2>
                </div>
                <div className='p-5 space-y-2 border-r border-dashed border-gray-700 gap-5'>
                    <p  className=' text-[#c4c8d3] text-xs font-inter'>Exercises</p>
                    <h2 className='text-3xl font-bold font-inter'>
                        {!isSave ? planCalories : saveCalories}
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default MyPlanPage;