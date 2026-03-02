import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BlogSection } from "@/components/blog-section"
import { LanguagesSection } from "@/components/languages-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { WavyBackground } from "@/components/wavy-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <WavyBackground />
      <Header />
      <main className="relative z-10 mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6 pb-16 max-w-7xl mx-auto">
        <div className="page-container space-y-20 px-6 py-12">
          <HeroSection />

          {/* About Section */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-200">
                About the ISCTE-IUL ACM Student Chapter
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We are the ISCTE-IUL Student Chapter of the Association for Computing Machinery (ACM), a vibrant community dedicated to advancing computing as a science and profession. Our chapter brings together passionate students to collaborate, learn, and innovate in the field of computer science and emerging technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  🚀 Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore cutting-edge technologies and work on innovative projects that solve real-world problems.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  🤝 Collaboration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect with fellow students and professionals to build meaningful relationships and partnerships.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  📚 Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enhance your skills through workshops, seminars, and hands-on experiences with industry experts.
                </p>
              </div>
            </div>
          </section>

          <BlogSection />
          <LanguagesSection />
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
