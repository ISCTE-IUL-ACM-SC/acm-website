import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WavyBackground } from "@/components/wavy-background"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <WavyBackground />
      <Header />
      <main className="relative z-10 mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6 pb-16 max-w-7xl mx-auto">
        <div className="page-container space-y-12 px-6 py-12">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-blue-800 dark:text-blue-200">About Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              Learn more about the ISCTE-IUL Student Chapter of the Association for Computing Machinery
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200">Who We Are</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                The ISCTE-IUL Student Chapter of the Association for Computing Machinery (ACM) is a vibrant community of students passionate about computing, technology, and innovation. We are part of ACM, the world's largest educational and scientific computing society, dedicated to advancing computing as a science and profession.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our chapter serves students at ISCTE-Instituto Universitário de Lisboa, fostering collaboration, learning, and professional development in the field of computer science and related disciplines.
              </p>
            </section>

            {/* Mission */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We are committed to:
              </p>
              <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Promoting excellence in computing education and professional practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Creating opportunities for members to connect, collaborate, and grow</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Inspiring innovation and fostering a culture of continuous learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Building bridges between academia and industry</span>
                </li>
              </ul>
            </section>

            {/* What We Do */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Workshops & Seminars</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We organize regular workshops and seminars covering emerging technologies, best practices, and industry insights to enhance our members' skills.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Networking Events</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Connect with fellow students, professionals, and industry leaders through our networking events and social gatherings.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Hackathons & Competitions</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Participate in hackathons and coding competitions to challenge yourself and showcase your talents.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Collaborative Projects</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Work on innovative projects with your peers and contribute to real-world solutions in computing.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Join */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200">Why Join Our Chapter?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Joining the ISCTE-IUL ACM Student Chapter opens doors to countless opportunities for personal and professional growth:
              </p>
              <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  <span>Access to exclusive events, workshops, and learning resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  <span>Network with like-minded students and industry professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  <span>Develop leadership and technical skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  <span>Be part of a global ACM community of computing professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  <span>Enhance your resume and career prospects</span>
                </li>
              </ul>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 rounded-xl p-8 text-white space-y-4">
              <h2 className="text-3xl font-bold">Ready to Join Us?</h2>
              <p className="text-lg">
                Whether you're a beginner or an experienced programmer, there's a place for you in our community. Connect with us today and become part of the future of computing!
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
