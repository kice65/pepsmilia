"use client";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for your booking. We will contact you shortly.
        </p>
        <Link href="/" className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
