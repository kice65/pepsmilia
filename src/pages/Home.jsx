import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">Welcome to Pepsmilia 🚀</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is your first Tailwind-styled page with Vite + React!
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  );
};

export default Home;
