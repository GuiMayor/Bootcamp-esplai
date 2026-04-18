import React from 'react';
import MainHeader from './components/Ejercicio07/MainHeader';
import LearningObjectives from './components/Ejercicio07/LearningObjectives';
import TargetAudience from './components/Ejercicio07/TargetAudience';
import CallToAction from './components/Ejercicio07/CallToAction';

function App() {
  return (
  <>
      <MainHeader />
      <hr />
      <LearningObjectives />
      <TargetAudience />
      <hr />
      <CallToAction />
    </>
  );
}

export default App;






/*=======ejercicio 05=====================
import React from 'react';
import WelcomeCard from './components/WelcomeCard'; 
import Hero from './components/Hero';
import Header from './components/Header';
import Subtitle from './components/Subtitle';
import InfoBox from './components/Infobox';
import Footer from './components/Footer';
import Header from './components/Ejercicio05/Header';
import ModuleCard from './components/Ejercicio05/ModuleCard';
import Footer from './components/Ejercicio05/Footer';

function App() {
  return (
  <>
  //ejercicico07
   <main>
      <Header />
      <section className="modules-grid">
        <ModuleCard />
        <ModuleCard />
        <ModuleCard />
      </section>
      <Footer />
    </main>
  </>
  );
}
export default App;*/

 /*================================================== 
 ejercicio 02 03 04
    <Header/>
    <Subtitle/>
    <InfoBox/>
    <div className="contenedor-global">
      <h1>Mi proyecto de React</h1>
      <WelcomeCard />  
      <Hero/>  
    </div>
    <footer/>  */