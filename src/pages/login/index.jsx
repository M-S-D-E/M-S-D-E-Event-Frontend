import React from 'react'

const Login = () => {
  return (
    <div className="p-6 text-center rounded-lg w-80 mx-auto my-[100px]">
      <h2 className="text-2xl font-bold text-black mb-2">Be the First to Know</h2>
      <p className="text-gray-700 mb-4">Sign up with your email address to receive news and updates.</p>
      <form className="flex flex-col items-center">
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full p-2 mb-4 border border-gray-300 rounded" 
          required 
        />
         <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 mb-4 border border-gray-300 rounded" 
          required 
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-[#C58940]  text-white rounded  hover:bg-gray-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login