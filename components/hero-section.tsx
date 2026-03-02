import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { TypewriterEffect } from "@/components/typewriter-effect"

export function HeroSection() {
  return (
    <section className="join-section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold text-blue-800 dark:text-blue-200 mb-6 leading-tight">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-200 mb-8 leading-relaxed">
              Be a part of our amazing community and collaborate on projects.
            </p>
            <Button className="group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-blue-600 hover:bg-blue-700 text-white p-2 text-center font-semibold">
              <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                Get Started
              </span>
              <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </div>
              <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-blue-800 transition-all duration-300 opacity-0 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-blue-800 group-hover:opacity-100"></div>
            </Button>
          </div>

          <div className="flex-1">
            <TypewriterEffect />
          </div>
        </div>
      </div>
    </section>
  )
}
