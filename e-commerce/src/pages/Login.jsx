import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
<div class="bg-gray-100 flex items-center justify-center h-screen">
<div class="bg-white p-8 rounded-lg shadow-md w-96">
    <h2 class="text-2xl font-bold text-center mb-6">Sign In</h2>
    <form action="#" method="POST">
        <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" id="email" name="email" required
                   class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"/>
        </div>
        <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" required
                   class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"/>
        </div>
        <button type="submit"
                class="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">Login
        </button>
    </form>
    <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account? 
        <Link to='/register' class="text-blue-600 hover:underline mx-3 text-md">Register</Link>
    </p>
</div>
</div>
  )
}

export default Login