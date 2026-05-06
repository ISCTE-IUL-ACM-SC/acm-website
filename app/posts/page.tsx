import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WavyBackground } from "@/components/wavy-background"
import { getSql } from "@/lib/db"

export default async function PostsPage() {
  const sql = getSql()
  const posts = await sql`
    SELECT id, title, description, publish_date, last_updated_date
    FROM posts
    ORDER BY publish_date DESC
  `

  return (
    <div className="min-h-screen bg-background">
      <WavyBackground />
      <Header />
      <main className="relative z-10 mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6 pb-16 max-w-7xl mx-auto">
        <div className="page-container space-y-12 px-6 py-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-blue-800 dark:text-blue-200">Latest Blog Posts</h1>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              Stay updated with the latest ACM news, events, and announcements.
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700 p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200">
                      {post.title}
                    </h2>
                    <time className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                      {new Date(post.publish_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
