"use client";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">⚠️ Payment Cancelled</h1>
        <p className="text-gray-700 mb-6">
          Your payment was not completed. Please try again or contact us.
        </p>
        <Link href="/" className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
