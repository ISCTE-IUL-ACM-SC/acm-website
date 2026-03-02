import Image from "next/image"

export function LanguagesSection() {
  const languages = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/python/python-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/java/java-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Go", logo: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/go/go-original.svg" },
    { name: "Ruby", logo: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/ruby/ruby-original.svg" },
    { name: "Rust", logo: "https://cdn.jsdelivr.net/npm/devicon@latest/icons/rust/rust-original.svg" },
  ]

  return (
    <section className="languages-section">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-200 mb-12">Programming Languages</h2>
        <div className="marquee-container overflow-hidden bg-gray-100 dark:bg-gray-800 py-6 rounded-xl shadow-inner">
          <div className="marquee-content flex animate-marquee gap-6">
            {/* First set */}
            {languages.map((lang, index) => (
              <div
                key={`first-${index}`}
                className="lang-item flex items-center space-x-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
              >
                <Image
                  src={lang.logo || "/placeholder.jpg"}
                  alt={lang.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg whitespace-nowrap">
                  {lang.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {languages.map((lang, index) => (
              <div
                key={`second-${index}`}
                className="lang-item flex items-center space-x-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
              >
                <Image
                  src={lang.logo || "/placeholder.jpg"}
                  alt={lang.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg whitespace-nowrap">
                  {lang.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
