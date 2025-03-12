"use client";

import Banner from "./components/banner";
import Features from "./components/features";

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <Banner />

      {/* Features Section */}
      <Features />

      {/* Extra Call to Action */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Start Booking Today</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Join thousands of professionals booking their workspaces seamlessly.
          </p>
          <a
            className="mt-6 inline-block bg-blue-600 px-10 py-3 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition"
            href="/login"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
