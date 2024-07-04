import React, { useEffect, useState } from 'react'
import Card from '../../../components/Card';
import K from '../../../constants';
import axios from 'axios';


const Events = () => {
  // Define a state to store events
  const [events, setEvents] = useState([]);

  // Define  a function to fetch events
  const getEvents = async () => {
    const response = await axios.get('https://m-s-d-e-event-backend-1.onrender.com/events');
    if (response.status === 200) {
      setEvents(response.data);
    } else {
      setEvents([]);
    }
  }

  // Get events
  useEffect(() => {
    getEvents();
  },[]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Online Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {events.map((event, index) => (
          <Card key={index} event={event} />
        ))}
      </div>


    </div>


  );
};

export default Events;