export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl font-semibold text-gray-600 mt-2">Page not found.</p>
        <p className="mt-4 text-gray-500">
          {`Sorry, we couldn't find the page you're looking for.`}
        </p>
      </div>
    </main>
  );
}
