import React from 'react';

const faqData = [
    {
        question: "What is FitPocket?",
        answer: "FitPocket is a SaaS platform that helps you create, customize, and manage workout routines with ease. Whether you're a fitness enthusiast, coach, or gym owner, FitPocket provides tools to build effective and tailored fitness plans."  // Fill in the answer
    },
    {
        question: "Who is FitPocket for?",
        answer: "FitPocket is designed for anyone who wants to organize and track workouts effectively. It’s ideal for personal trainers, fitness coaches, and individuals looking to take their fitness journey to the next level with structured workout plans."  // Fill in the answer
    },
    {
        question: "Can I customize workouts for different fitness levels?",
        answer: "Absolutely! FitPocket offers customization options that allow you to create workouts suited to various fitness levels, goals, and preferences. You can easily modify routines, sets, reps, and other parameters to meet individual needs."  // Fill in the answer
    },
    {
        question: "What makes FitPocket different from other workout apps?",
        answer: "FitPocket offers unique flexibility and customization, making it a comprehensive tool for serious fitness planning. Unlike many apps, it’s designed with both trainers and individuals in mind, providing advanced features like progress tracking, detailed analytics, and easy-to-use customization tools."  // Fill in the answer
    },
    {
        question: "Can I cancel my FitPocket subscription anytime?",
        answer: "Yes, you can cancel your FitPocket subscription anytime with no cancellation fees. We believe in providing a commitment-free experience so you can focus on your fitness goals without worry."  // Fill in the answer
    },
];

export const FAQ: React.FC = () => {
    return (
        <section className="my-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-fp-dark">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <details key={index} className="bg-fp-gray p-4 rounded-lg group">
                        <summary className="font-semibold cursor-pointer flex justify-between items-center text-fp-primary">
                            {item.question}
                            <span className="text-2xl transition-transform duration-300 group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-4 text-fp-dark leading-relaxed overflow-hidden transition-all duration-300 max-h-0 group-open:max-h-96">
                            {item.answer}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
};