'use client';
import { workoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';

const SavedPage = () => {

    const {savePlan} =useContext(workoutContext)

    console.log('savePlan', savePlan)

    return (
        <div>
            saved
        </div>
    );
};

export default SavedPage;