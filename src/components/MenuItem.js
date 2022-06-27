import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className="w-[30vmin] flex flex-col flex-wrap border-black border-double border-4 m-1 p-2 rounded-lg">
      <p className="text-md lg:text-2xl">{item.name}</p>
      <p className="text-xs md:text-md flex-1">{item.description}</p>
      <p className="text-md md:text-lg">{item.price}</p>
    </div>
  );
};

export default MenuItem;
