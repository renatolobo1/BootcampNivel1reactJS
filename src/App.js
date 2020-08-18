import React from 'react';

import Header from './components/Header';

function App(){
  return (
    <>
      <Header title="Homepage" name="Renato Lôbo">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects" name="Matheus Lôbo">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul> 
      </Header>
    </>
  
  );
}

export default App;