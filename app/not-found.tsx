"use client"

import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="mb-8">
        <Image
          src="/404.png"
          alt="Not found"
          width={640}
          height={360}
          className="mx-auto w-full max-w-xl h-auto"
          draggable={false}
          style={{ userSelect: "none" }}
          priority
        />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Page not found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for doesn’t exist or has been moved.</p>
      <Link href="/" className="inline-block bg-black text-white px-6 py-3 font-medium hover:bg-gray-800">
        Go back home
      </Link>
    </main>
  )
}
