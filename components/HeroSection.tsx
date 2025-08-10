"use client"

export function HeroSection() {
  const scrollToEditor = () => {
    const editorSection = document.querySelector("#editor")
    if (editorSection) {
      editorSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">MP3 Tag Editor</h1>
      <p className="text-xl text-gray-600 mb-8">Free online metadata editor</p>

      <div className="space-y-6 mb-8">
        <p className="text-gray-600 leading-relaxed">
          I'm a free online tool for editing MP3 metadata tags including title, artist, album, and cover image. All
          processing happens in your browser - your files never leave your device.
        </p>

        <p className="text-gray-600 leading-relaxed">
          I work entirely client-side using modern web technologies, focusing on privacy, security, and ease of use for
          music enthusiasts and professionals.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={scrollToEditor} 
          className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800"
        >
          Get started →
        </button>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500"></div>
          <span className="text-sm text-gray-600">Available 24/7</span>
        </div>
      </div>
    </section>
  )
}
