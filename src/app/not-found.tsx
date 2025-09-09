import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
          <p className="text-gray-600">{"Sorry, we couldn't find the page you're looking for."}</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/udoti"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Home
          </Link>
          <div>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Back to main site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}