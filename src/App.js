import React from 'react';
import Body from './Body';
import Nav from './components/Nav';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div>
      <Nav />
      <Welcome />
      <Body />
    </div>
  );
};

export default App;
