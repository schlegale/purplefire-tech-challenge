export default function Success() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-green-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
        <p className="text-xl text-green-700 mt-4">Thank you for your purchase.</p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}
