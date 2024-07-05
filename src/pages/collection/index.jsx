import React, { useState } from 'react';
import Events from "../landing/components/events";

const Collection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-white p-10 mx-auto my-[100px]">
      <h1 className="text-center text-4xl font-bold mb-6">Everything You Need to Know</h1>
      <div className="flex justify-center mb-6">
        <div className="flex border border-gray-300 rounded w-1/2">
          <span className="flex items-center bg-white px-3">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.9 14.32a7 7 0 111.41-1.41l4.27 4.27a1 1 0 01-1.42 1.42l-4.27-4.27zM11 6a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd"></path>
            </svg>
          </span>
          <input
            type="text"
            className="flex-grow px-4 py-2 outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <Events searchQuery={searchQuery} />
    </div>
  );
};

export default Collection;
