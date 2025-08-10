import Link from "next/link"

export function Footer() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kathmandu",
  })

  return (
    <footer className="mt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-400">
            Made with ❤️ by{" "}
            <Link 
              href="https://www.manishtamang.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              Manish Tamang
            </Link>
          </div>
          <div className="text-xs text-gray-400">{currentTime} NPT</div>
        </div>
      </div>
    </footer>
  )
}
