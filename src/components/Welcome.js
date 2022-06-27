import React from 'react';

const Welcome = () => {
  return (
    <div className="title container max-w-2xl mx-auto border-l-gray-300 rounded-xl shadow-xl border p-5 m-10">
      <p className="text-9xl text-center text-gray-700 font-bold mb-5">
        Nuovo Vesuvio
      </p>
      <p className=" text-center text-gray-900 text-2xl">
        Enjoy the crispness of the beans{' '}
      </p>
      <p className=" text-center text-gray-900 text-2xl">
        and the smoothness of the cheese
      </p>
    </div>
  );
};

export default Welcome;
