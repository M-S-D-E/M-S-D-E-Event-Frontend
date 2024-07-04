import { Instagram } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#C58940] p-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4 ">MSDE</h1>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-white">
              <Instagram />
            </a>
            <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white"><i className="fab fa-pinterest-p"></i></a>
          </div>
          <ul>
            <li className="mb-2"><a href="#" className="text-white hover:underline">RETREAT</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">FESTIVAL</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">PODCAST</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">BLOG</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">ABOUT</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">CONTACT</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">FAQS</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:underline">CAREERS</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">BE THE FIRST TO KNOW</h2>
          <p className="mb-4">Sign up with your email address to receive news and updates.</p>
          <div className="flex mb-2">
            <input type="email" placeholder="EMAIL ADDRESS" className="p-2 border border-gray-300 rounded-l" />
            <button className="p-2 bg-black text-white rounded-r">SIGN UP</button>
          </div>
          <p className="text-gray-500">We respect your privacy.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer