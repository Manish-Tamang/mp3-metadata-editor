"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-lg font-medium text-gray-900">
            MP3 Tag Editor
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm ${pathname === item.href ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            aria-label="Toggle navigation"
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-100">
            <div className="py-2 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`px-1 py-2 text-sm ${pathname === item.href ? "text-gray-900 font-medium" : "text-gray-700 hover:text-gray-900"}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
