import React from 'react';

const Nav = () => {
  return (
    <div className="bg-yellow-700 flex justify-center items-center">
      <nav className="container max-w-4xl flex flex-row justify-around p-1 my-2">
        <a
          className="text-white text-sm font-bold cursor-pointer"
          href="#drinks"
        >
          Drinks
        </a>
        <a
          className="text-white text-sm font-bold cursor-pointer"
          href="#appetizers"
        >
          Appetizers
        </a>
        <a className="text-white text-sm font-bold cursor-pointer" href="#main">
          Main Course
        </a>
        <a
          className="text-white text-sm font-bold cursor-pointer"
          href="#dessert"
        >
          Dessert
        </a>
      </nav>
    </div>
  );
};

export default Nav;
