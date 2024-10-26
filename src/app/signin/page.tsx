'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Logo } from "@/components/logo";

export default function SignInPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        { src: "/c1.jpg", alt: "Workout 1" },
        { src: "/c2.jpg", alt: "Workout 2" },
        { src: "/c3.jpg", alt: "Workout 3" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-between">
                <Logo />
                <div className="flex flex-col justify-center flex-grow">
                    <h1 className="text-4xl font-bold mt-16 mb-8">Sign In</h1>
                    <form className="space-y-4">
                        <Input type="email" placeholder="Email" className="bg-transparent border-gray-600" />
                        <Input type="password" placeholder="Password" className="bg-transparent border-gray-600" />
                        <Button className="w-full bg-button text-white hover:bg-button-dark">Sign in</Button>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" />
                            <label htmlFor="remember" className="text-sm text-gray-400">Remember me</label>
                        </div>
                        <Link href="/forgot-password" className="text-sm text-button hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <p className="text-sm text-gray-400 mt-6">
                        New to FitPocket? <Link href="/signup" className="text-button hover:underline">Sign up now.</Link>
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p className="text-gray-400">© 2021 FitPocket</p>
                    <div className="text-sm text-gray-500 flex flex-col items-end">
                        <div className="mt-2 space-x-4">
                            <Link href="/terms" className="text-button">Terms</Link>
                            <Link href="/privacy" className="text-button">Privacy</Link>
                            <Link href="/security" className="text-button">Security</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center p-8">
                                <h2 className="text-4xl font-bold mb-4">Start planning your</h2>
                                <h1 className="text-6xl font-bold mb-4">Workout</h1>
                                <p className="text-xl">
                                    Start your healthy living with making your{' '}
                                    <span className="text-button">workout schedule</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}