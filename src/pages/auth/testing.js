// src/pages/SignUpPage.jsx
import React from 'react';
import illustration from '../../assests/signup-illustration.svg';

const Testing = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="hidden md:flex md:w-1/2 bg-green-500 items-center justify-center">
        <img src={illustration} alt="Illustration" className="w-3/4 h-auto" />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold text-center text-green-500 mb-4">One's Store</h2>
            <p className="text-center text-gray-400 mb-6">Already have an Account? <a href="#" className="text-green-500">Login</a></p>
            <form>
              <div className="mb-4">
                <label className="block text-gray-400">User Name</label>
                <input type="text" className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400">Email</label>
                <input type="email" className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400">Password</label>
                <div className="relative">
                  <input type="password" className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer">👁️</span>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-400">Confirm Password</label>
                <div className="relative">
                  <input type="password" className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer">👁️</span>
                </div>
              </div>
              <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-green-500">Sign Up</button>
            </form>
            <p className="text-center text-gray-500 text-sm mt-4">
              I agree to <a href="#" className="text-green-500">Terms of Service</a> and its <a href="#" className="text-green-500">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testing;
