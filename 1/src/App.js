import logo from "./logo.svg";
import "./App.css";
import Hola from "./components/Hola"; // importamos el componente
import Contador from "./components/Contador";
import Toogle from "./components/Toogle";
import Reloj from "./components/Reloj";
import Fruta from "./components/Fruta";
import CicloVida from "./components/CicloVida";
import RelojOk from "./components/RelojOk";
import PokemonList from "./components/PokemonList";

/*const frutas = [
  { name: "platano", qty: 1 },
  { name: "manzana", qty: 1 },
];*/

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> EN COMENTARIOS PARA EVITAR EL LOGO*/}

      <PokemonList />
      {/*<Hola />
       PASAMOS COMPONENTEStiene que estar inicializada con esta etiqueta*/}
      {/*<CicloVida />
      // bucle de frutas
      {/*{frutas.map((fruta, i) => {
        // es un bucle, añade una llave a cada elemento, no es obligatorio pero se recomienda
      //  return <Fruta fruta={fruta} key={`fruta-${i}`}></Fruta>;
        //return <Fruta name={fruta.name} qty={fruta.qty}/>;
      })}
      {/*<Reloj />
      <RelojOk />
      <Toogle />
      <Hola user="Ericka" />
      {/* PASAMOS AL COMPONENTE una propiedad llamado user
      {/*<Hola algo="Soy una prop" />
      {/* PASAMOS AL COMPONENTE una propiedad llamado user
      {/* usamos el componente CONTADOR*/}
      <Contador />
      {/*<Contador cont={50} />*/}
    </div>
  );
}

export default App;
