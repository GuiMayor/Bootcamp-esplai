import React from 'react';
import WelcomeCard from './components/WelcomeCard'; 
import Hero from './components/Hero';
import Header from './components/Header';
import Subtitle from './components/Subtitle';
import InfoBox from './components/Infobox';
import Footer from './components/Footer';

function App() {
  return (
  <> 
    <Header/>
    <Subtitle/>
    <InfoBox/>
    <div className="contenedor-global">
      <h1>Mi proyecto de React</h1>
      <WelcomeCard />  
      <Hero/>  
    </div>
    <footer/>
    </>
  );
}

export default App;