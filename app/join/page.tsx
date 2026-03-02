"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WavyBackground } from "@/components/wavy-background"
import { Button } from "@/components/ui/button"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    major: "",
    year: "",
    interests: [] as string[],
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const interests = [
    "Web Development",
    "Machine Learning",
    "Mobile Development",
    "Cloud Computing",
    "Cybersecurity",
    "Game Development",
    "Data Science",
    "DevOps",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form")
      }

      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        studentId: "",
        major: "",
        year: "",
        interests: [],
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to submit form. Please try again."
      console.error("Form submission error:", error)
      setErrorMessage(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <WavyBackground />
      <Header />
      <main className="relative z-10 mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6 pb-16 max-w-4xl mx-auto">
        <div className="page-container space-y-12 px-6 py-12">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-blue-800 dark:text-blue-200">Join ACM ISCTE</h1>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              Become part of our community and connect with fellow students passionate about computing
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 space-y-6">
            {submitted && (
              <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-800 dark:text-green-100 px-4 py-3 rounded-lg">
                <p className="font-semibold">Success!</p>
                <p>Thank you for joining ACM ISCTE. We'll be in touch soon!</p>
              </div>
            )}

            {errorMessage && (
              <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-800 dark:text-red-100 px-4 py-3 rounded-lg">
                <p className="font-semibold">Error</p>
                <p>{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="João Silva"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@iscte-iul.pt"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Student ID Field */}
              <div className="space-y-2">
                <label htmlFor="studentId" className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Student ID *
                </label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                  placeholder="20230001"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Major Field */}
              <div className="space-y-2">
                <label htmlFor="major" className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Major/Degree *
                </label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  required
                  placeholder="Computer Science, Information Systems, etc."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Year Field */}
              <div className="space-y-2">
                <label htmlFor="year" className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Year of Study *
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select year of study</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Interests */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Areas of Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-800 dark:text-gray-200">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Tell us about yourself (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your interests, experience, or why you want to join ACM..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Submitting..." : "Join ACM ISCTE"}
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">Why Join?</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Network with peers, attend workshops, participate in competitions, and grow your skills in computing.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">Events</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                We organize talks, hackathons, coding competitions, and social events throughout the year.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">Membership</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Lifetime membership access to ACM resources, publications, and the global computing community.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
