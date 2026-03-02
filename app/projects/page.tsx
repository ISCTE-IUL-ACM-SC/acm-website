import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WavyBackground } from "@/components/wavy-background"
import { projects } from "@/lib/projects-data"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <WavyBackground />
      <Header />
      <main className="relative z-10 mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6 pb-16 max-w-7xl mx-auto">
        <div className="page-container space-y-12 px-6 py-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-blue-800 dark:text-blue-200">Our Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              Explore the innovative projects we've been working on to make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
