import React from 'react';
import { useSelector } from 'react-redux';
import RocketList from './rocketList';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocket.rockets);
  return (
    <div>
      {rockets.map((rocket) => (
        <RocketList
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          images={rocket.flickr_images}
          description={rocket.description}
        />
      ))}
    </div>
  );
};

export default Rockets;
