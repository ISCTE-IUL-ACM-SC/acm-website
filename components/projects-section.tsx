"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { projects } from "@/lib/projects-data"

export function ProjectsSection() {

  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [projects.length])

  return (
    <section className="projects-section">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-200 mb-12">Our Projects</h2>
        <div className="relative h-96 overflow-hidden rounded-xl">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="relative w-full h-full flex-shrink-0">
                <Image
                  className="w-full h-full object-cover"
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 p-4">
                  <div className="bg-black/50 p-4 rounded-lg backdrop-blur-sm text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
