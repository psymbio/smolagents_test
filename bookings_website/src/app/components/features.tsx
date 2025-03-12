"use client";

export default function Features() {
  return (
    <section id="features" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Us?</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Discover the easiest way to manage your workspace.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">Easy Booking</h3>
            <p className="mt-2 text-gray-600">
              Reserve desks in just a few clicks with our seamless interface.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">Real-time Availability</h3>
            <p className="mt-2 text-gray-600">
              Check desk availability instantly and book your perfect workspace.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">Multi-Location Support</h3>
            <p className="mt-2 text-gray-600">
              Book desks at different office locations across the country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
