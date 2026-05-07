import { getPosts } from "@/lib/db"

export async function BlogSection() {
  const posts = await getPosts()

  return (
    <section className="blog-section">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-200 mb-12">Latest Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700 p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {new Date(post.publish_date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
