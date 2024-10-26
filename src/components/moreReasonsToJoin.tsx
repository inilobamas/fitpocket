import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const reasons = [
    {
        title: "Track Your Progress with Ease",
        description: "Stay motivated with real-time progress tracking and insights to see how far you've come and what's next.",
    },
    {
        title: "Flexible and Affordable Plans",
        description: "Enjoy top-notch fitness coaching without breaking the bank. Cancel or adjust anytime based on your needs.",
    },
    {
        title: "Tailored Workouts Just for You",
        description: "Get personalized workout plans that adapt to your goals, fitness level, and schedule—no more generic routines.",
    },
    {
        title: "Expert Guidance at Your Fingertips",
        description: "Access expert-approved workouts and tips whenever you need a boost or guidance, all within FitPocket.",
    },
]

export function MoreReasonsToJoin() {
    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold mb-6">More Reasons to Join</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reasons.map((reason, index) => (
                    <Card key={index} className="bg-gradient-to-br from-emerald-600 to-emerald-900 text-white border-0">
                        <CardHeader>
                            <CardTitle>{reason.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-200">{reason.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}