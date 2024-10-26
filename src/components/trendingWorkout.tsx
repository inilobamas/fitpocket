import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const workouts = [
    { id: 1, title: 'Strong Foundations', image: '/workout-1.png' },
    { id: 2, title: 'Deadlift', image: '/workout-2.png' },
    { id: 3, title: 'Biceps', image: '/workout-3.png' },
    { id: 4, title: 'Sexy Back', image: '/workout-4.png' },
    { id: 5, title: 'Core', image: '/workout-5.png' },
]

export function TrendingWorkouts() {
    return (
        <section className="trending-workouts m-12">
            <h2 className="text-3xl font-bold mb-6">Trending workout</h2>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <Select>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="gym">Gym</SelectItem>
                        <SelectItem value="home">Home</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="strength">Strength</SelectItem>
                        <SelectItem value="cardio">Cardio</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {workouts.map((workout) => (
                    <Card key={workout.id} className="relative overflow-hidden border-0">
                        <CardContent className="p-0">
                            <Image
                                src={workout.image}
                                alt={workout.title}
                                width={200}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                            <Badge className="absolute top-2 right-2 bg-button text-white font-bold px-2 py-1">
                                TOP 10
                            </Badge>
                            <div className="absolute bottom-2 left-2 text-white text-lg font-bold">
                                {workout.id}
                            </div>
                            <Badge className="absolute bottom-2 right-2 text-white bg-button" variant="secondary">
                                Recently Added
                            </Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}