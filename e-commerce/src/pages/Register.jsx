import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-[700px]">
<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
    <form action="#" method="POST">
        <div className="mb-4">
            <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500" placeholder="your name"/>
        </div>
        <div className="mb-4">
            <label for="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 text-gray-100 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500" placeholder="your email"/>
        </div>
        <div className="mb-4">
            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" required className="mt-1 block w-full border border-gray-300 rounded-md p-2  focus:outline-none focus:ring focus:ring-blue-500" placeholder="your password"/>
        </div>
        <div className="mb-4">
            <label for="password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" id="password" name="password" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500" placeholder="confirm-password"/>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">Sign Up</button>
    </form>
    <p className="mt-4 text-center text-sm text-gray-600">Already have an account? 
        <Link to= '/login' className="text-blue-600 hover:underline mx-3 ">Sign in</Link>
    </p>
</div>
</div>
  )
}

export default Register