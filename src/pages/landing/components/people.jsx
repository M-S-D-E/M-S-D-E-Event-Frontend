import React from 'react'
import Card from '../../../components/Card';
import K from '../../../constants';

const People = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Online Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {K.PEOPLE.map((event, index) => (
          <Card key={index} event={event} />
        ))}
      </div>


    </div>


  );
};

export default People;