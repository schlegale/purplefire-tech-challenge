export default function Failure() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-red-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Payment Failed</h1>
        <p className="text-xl text-red-700 mt-4">Something went wrong with your transaction.</p>
        <p className="mt-2">Please try again or contact support if the problem persists.</p>
        <div className="mt-6">
          <a
            href="/checkout"
            className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
          >
            Try Again
          </a>
          <a
            href="/support"
            className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200 ml-4"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
