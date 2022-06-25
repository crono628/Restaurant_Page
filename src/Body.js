import React from 'react';
import { menuData } from './menuData';

const Body = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="container max-w-4xl">
        <p className="text-5xl">Drinks</p>
        <div className="flex flex-row flex-wrap">
          {menuData
            .filter((item) => item.course === 'drink')
            .map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex flex-col justify-evenly max-w-xs max-h-full p-1 m-1"
                >
                  <p className="text-xl">{item.name}</p>
                  <p className="text-xs">{item.description}</p>
                  <p className="text-md">{item.price}</p>
                </div>
              );
            })}
        </div>
        <p className="text-5xl">Appetizers</p>
        <div className="flex flex-row flex-wrap">
          {menuData
            .filter((item) => item.course === 'appetizer')
            .map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex flex-col justify-evenly max-w-xs max-h-full p-1 m-1"
                >
                  <p className="text-xl">{item.name}</p>
                  <p className="text-xs">{item.description}</p>
                  <p className="text-md">{item.price}</p>
                </div>
              );
            })}
        </div>
        <p className="text-5xl">Main</p>
        <div className="flex flex-row flex-wrap">
          {menuData
            .filter((item) => item.course === 'main')
            .map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex flex-col justify-evenly max-w-xs max-h-full p-1 m-1"
                >
                  <p className="text-xl">{item.name}</p>
                  <p className="text-xs">{item.description}</p>
                  <p className="text-md">{item.price}</p>
                </div>
              );
            })}
        </div>
        <p className="text-5xl">Dessert</p>
        <div className="flex flex-row flex-wrap">
          {menuData
            .filter((item) => item.course === 'dessert')
            .map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex flex-col justify-evenly max-w-xs max-h-full p-1 m-1"
                >
                  <p className="text-xl">{item.name}</p>
                  <p className="text-xs">{item.description}</p>
                  <p className="text-md">{item.price}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Body;
