import React from 'react'

const Card = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={`https://savefiles.org/${event.image}?shareable_link=285`} alt={event.eventNames} />
      <div className="p-4">
        <h3 className="text-lg font-bold">{event.eventNames}</h3>
        <p className="text-gray-600">{event.eventDate}</p>
        <p className="text-gray-800">{event.eventType}</p>
        <p className="text-gray-600">{event.price}</p>
        <p className="text-gray-600">{event.eventCompany}</p>
        <p className="text-gray-600">{event.location}</p>
        <p className="text-gray-600">{event.eventStatus}</p>
        
      </div>
    </div>
  );
};

export default Card