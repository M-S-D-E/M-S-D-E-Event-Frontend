import React from 'react'

const Card = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={event.image} alt={event.title} />
      <div className="p-4">
        <h3 className="text-lg font-bold">{event.title}</h3>
        <p className="text-gray-600">{event.date}</p>
        <p className="text-gray-800">{event.price}</p>
        <p className="text-gray-600">{event.organization}</p>
        <p className="text-gray-600">{event.followers}</p>
        {event.soldOut && <span className="text-red-500 font-bold">Sold Out</span>}
      </div>
    </div>
  );
};

export default Card