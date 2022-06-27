import React from 'react';
import Body from './Body';
import Nav from './components/Nav';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <Welcome />
      <Body />
    </div>
  );
};

export default App;
