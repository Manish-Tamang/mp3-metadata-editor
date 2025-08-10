"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-medium text-gray-900">
            MP3 Tag Editor
          </Link>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm ${
                  pathname === item.href ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
