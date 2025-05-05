// app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-4 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
      <Link href="/" className="text-blue-600 underline hover:text-blue-800">
        Go to Home
      </Link>
    </div>
  );
}
