import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import axios from 'axios';

const Events = ({ searchQuery }) => {
  // Define a state to store events
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Define a function to fetch events
  const getEvents = async () => {
    const response = await axios.get('https://m-s-d-e-event-backend-1.onrender.com/events?limit=0');
    if (response.status === 200) {
      setEvents(response.data);
    } else {
      setEvents([]);
    }
  };

  // Get events
  useEffect(() => {
    getEvents();
  }, []);

  // Filter events based on search query
  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      setFilteredEvents(
        events.filter(event =>
          event.eventNames.toLowerCase().includes(lowercasedQuery) ||
          event.location.toLowerCase().includes(lowercasedQuery) ||
          event.price.toString().includes(lowercasedQuery)
        )
      );
    } else {
      setFilteredEvents(events);
    }
  }, [searchQuery, events]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Online Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredEvents.map((event, index) => (
          <Card key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
