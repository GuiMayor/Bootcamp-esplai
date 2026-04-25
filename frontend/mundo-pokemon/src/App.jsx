import Pokedex from './components/Pokedex';
import Ears from './components/Ears';
import Cheeks from './components/Cheeks';
import './styles/styles.css';      
import './styles/decorations.css'; 

function App() {
  return (
    <div className="wrapper"> 
      <Ears />
      <Cheeks />
      <Pokedex />
    </div>
  );
}

export default App;