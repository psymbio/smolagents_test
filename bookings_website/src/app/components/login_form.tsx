"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const users: Record<string, { username: string; password: string }> = {
  admin: { username: "admin", password: "admin" },
  user: { username: "user", password: "user123" }
};

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (users[username] && users[username].password === password) {
      router.push(`/home/${username}`); // Navigate to user-specific home
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <Image
        fill={true}
        alt=""
        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

        {/* Login Form */}
        <main className="flex items-center justify-center px-8 py-12 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Welcome to Squid 🦑
            </h1>
            <p className="mt-4 text-gray-500">
              Sign in to access your personalized dashboard.
            </p>

            <form onSubmit={handleLogin} className="mt-8 grid grid-cols-6 gap-6">
              {/* Username Input */}
              <div className="col-span-6">
                <label htmlFor="Username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="Username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-lg shadow-sm transition-all duration-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                  placeholder="Enter your username"
                />
              </div>

              {/* Password Input */}
              <div className="col-span-6">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-lg shadow-sm transition-all duration-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="col-span-6">
                  <p className="text-sm text-red-500">{error}</p>
                </div>
              )}

              {/* Login Button */}
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block w-full sm:w-auto shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition 
                  hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:ring-blue-300 focus:outline-none"
                >
                  Login
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Don’t have an account?{" "}
                  <a href="#" className="text-blue-600 underline">
                    Sign up
                  </a>.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
