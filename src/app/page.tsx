import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { EmailForm } from '@/components/emailForm'
import { TrendingWorkouts } from '@/components/trendingWorkout'
import { MoreReasonsToJoin } from '@/components/moreReasonsToJoin'
import { FAQ } from '@/components/faq'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 space-y-12">
        <Hero />
        <EmailForm />
        <TrendingWorkouts />
        <MoreReasonsToJoin />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}