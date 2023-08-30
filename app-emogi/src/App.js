import logo from './logo.svg';
import './App.css';
import Rindo from "./img/Rindo.png";
import Risonho from "./img/Risonho.png";
import Festa from "./img/Festa.png";
import Bailarina from "./img/Bailarina.png";

function App() {
  return (
    <div class name= "App">
    <h1>  Hello, World!  </h1>
    <img src={Rindo} title='sorrindo' height="100px" width="100px"/>
    <p>Clique no emoji para exibir o nome dele!</p>
      <img src={Risonho} title='risonho' height="40px" width="40px"/>
      <img src={Festa} title='festa' height="40px" width="40px"/>
      <img src={Bailarina} title='bailarina' height="40px" width="40px"/>
      </div>
  );
}

export default App;
