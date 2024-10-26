'use client';

import { Button } from "@/components/ui/button";
import { TrendingWorkouts } from "@/components/trendingWorkout";
import { Logo } from "@/components/logo";
import { WorkoutCategories } from "@/components/categoryWorkout";
import FooterHome from "@/components/footerHome";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="min-h-[70vh] max-h-[70vh] bg-black text-white flex flex-col mb-12" style={{ backgroundImage: "url('/workout-4-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>

                <div className="container mx-auto px-4 py-4 p-12 mt-4">
                    <Logo />
                </div>
                <div className="flex-grow flex flex-col justify-end">
                    <div className="container-fluid w-full">
                        <div className="relative">
                            <div className="bg-gradient-to-t from-black to-transparent p-8">
                                <div className="max-w-2xl">
                                    <h1 className="text-6xl font-bold mb-4">SEXY BACK</h1>
                                    <p className="text-xl mb-6">
                                        Designed to target upper, mid, and lower back muscles, this program combines strength,
                                        endurance, and flexibility exercises to improve posture, prevent injuries, and enhance your
                                        physique.
                                    </p>
                                    <div className="space-x-4">
                                        <Button className="bg-black text-white hover:bg-gray-900 border-0">
                                            Start Workout
                                        </Button>
                                        <Button variant="outline" className="border-white bg-gray-800 text-white hover:bg-gray-700 hover:text-white border-0">
                                            More Info
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TrendingWorkouts />
            <WorkoutCategories category="Strength" />
            <WorkoutCategories category="Conditioning" />
            <WorkoutCategories category="Endurance" />
            <FooterHome />
        </div>
    );
}