import React from 'react';
import WelcomeCard from './WelcomeCard'; 
import Hero from './Hero';

function App() {
  return (
    <div className="contenedor-global">
      <h1>Mi proyecto de React</h1>
      <WelcomeCard />  
      <Hero/>  
    </div>
  );
}

export default App;