import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const categories = [
    { id: 1, title: 'Deadlift', image: '/w-deadlift.png' },
    { id: 2, title: 'Lower Body', image: '/w-rdl.png' },
    { id: 3, title: 'Dumbbell', image: '/c1.jpg' },
    { id: 4, title: 'Bench Press', image: '/c2.jpg' },
    { id: 5, title: 'Conditioning', image: '/c3.jpg' },
]

export function WorkoutCategories({ category }: { category: string }) {
    return (
        <section className="categories m-12">
            <h2 className="text-3xl font-bold mb-6">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {categories.map((category) => (
                    <Card key={category.id} className="relative overflow-hidden border-0">
                        <CardContent className="p-0 aspect-[3/3]">
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-2 left-2 text-white text-lg font-bold">
                                {category.title}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}