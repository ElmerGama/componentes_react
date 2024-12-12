import './App.css';
import Andres from './componentes/andres';
import Diego from './componentes/diego';
import Joao from './componentes/joao';
import Pepillo from './componentes/pepillo';
import Ricardo from './componentes/ricado';

function App() {
  return (
    <div className="App-pepillo">
      <h1>
        Sistemas Tercer Año
      </h1>
      <Pepillo/>
      <Ricardo/>
      <Andres/>
      <Diego/>
      <Joao/>
    </div>
  );
}

export default App;
