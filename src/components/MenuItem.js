import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div>
      <h6>{item.name}</h6>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default MenuItem;
