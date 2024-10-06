import React from "react";

export default function Login() {
  return (
    <div className="flex h-screen">
      {/* Left Part */}
      <div className="w-1/2 flex flex-col justify-between p-8">
        {/* Top Logo */}
        <div className="flex justify-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-16" />
        </div>

        {/* Middle Form */}
        <div className="flex justify-center">
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="text-sm text-gray-700" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <div>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Powered By */}
        <div className="flex justify-center items-center">
          <span className="text-gray-600">Powered by</span>
          <img
            src="/path/to/poweredby-logo.png"
            alt="Powered By Logo"
            className="h-8 ml-2"
          />
        </div>
      </div>

      {/* Right Part */}
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/path/to/background-image.jpg')" }}
      >
        <div className="absolute bottom-0 p-8 text-white">
          <p>Some text at the bottom with padding</p>
        </div>
      </div>
    </div>
  );
}
