import React from 'react';
import MenuItem from './components/MenuItem';
import { menuData } from './menuData';

const Body = () => {
  return (
    <div className="flex flex-col text-center flex-wrap justify-center mb-72">
      <p id="drinks" className="text-5xl scroll-m-12">
        Drinks
      </p>
      <div className="container max-w-2xl flex flex-row flex-wrap justify-center">
        {menuData
          .filter((item) => item.course === 'drink')
          .map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
      </div>
      <p id="appetizers" className="text-5xl scroll-m-12">
        Appetizers
      </p>
      <div className="container max-w-2xl flex flex-row flex-wrap justify-center">
        {menuData
          .filter((item) => item.course === 'appetizer')
          .map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
      </div>
      <p id="main" className="text-5xl scroll-m-12">
        Main
      </p>
      <div className="container max-w-2xl flex flex-row flex-wrap justify-center">
        {menuData
          .filter((item) => item.course === 'main')
          .map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
      </div>
      <p id="dessert" className="text-5xl scroll-m-12">
        Dessert
      </p>
      <div className="container max-w-2xl flex flex-row flex-wrap justify-center">
        {menuData
          .filter((item) => item.course === 'dessert')
          .map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Body;
