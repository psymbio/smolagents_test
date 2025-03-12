"use client";

export default function Banner() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Simplify Desk Bookings.  
            <strong className="font-extrabold text-blue-700 sm:block"> Work Smarter. </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-600">
            Reserve your workspace effortlessly. Manage bookings with ease. Stay productive!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-sm bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-3 focus:outline-none sm:w-auto"
              href="/login"
            >
              Login Now
            </a>

            <a
              className="block w-full rounded-sm px-12 py-3 text-sm font-medium text-blue-600 border border-blue-600 shadow-sm hover:bg-blue-100 focus:ring-3 focus:outline-none sm:w-auto"
              href="#features"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
