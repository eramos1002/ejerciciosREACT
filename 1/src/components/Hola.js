import React from "react"; //importa la libreria
import PropTypes from "prop-types"; // librería que ayuda a tipar

//CREACION COMPONENTE
class Hola extends React.Component {
  //un componente de react es una clase
  render() {
    const element1 = <h1>Soy un JSX</h1>;
    const user = "Ericka";
    //const user = "Dani";
    //const element2 = <h1>Hola {user}</h1>;
    const element3 = <h1>Hola {1 + 1}</h1>;
    const suma = (i, j) => i + j;
    const element4 = <h1>Hola {suma(1, 1)}</h1>; //devuelve la funcion

    const element5 = <h1>Hola {user ? user : "invitado"}</h1>;

    const printUser = (user) => {
      // cambia el valor segun el nombre que ponemos en user
      if (user) {
        return (
          <div>
            <h1>Hola {user}</h1>;<p>Que tal clase?</p>
            <a href="">neoland.es</a>
          </div>
        );
      } else {
        return <h2>Registrate</h2>;
      }
    };
    //  return printUser(user);
    const element6 = <h1 id={"soy el id" + "9" + 1}>Soy un h1</h1>;

    const element7 = (
      <h1 className="App-link" id={"9" + 1}>
        Soy un h1
      </h1>
    );

    // return element7;
    //Para llamar las props especificadas desde App.js
    /*return <h1>Hola {this.props.user}</h1>; // es cuando llama el user desde App.js*/
    return (
      <h1>
        Hola {this.props.user} {this.props.algo}
      </h1>
    );
    //return element6;
  }
}

Hola.defaultProps = {
  //sirve para dar un valor a una prop cuando no se esta dando, no es necesario ponerlo en props requeridas
  user: "Invitado",
};

//hacemos uso del proptypes
Hola.propTypes = {
  // aqui se pone el tipo "en minuscula"
  // con esto la prop ya esta tipada
  user: PropTypes.string.isRequired, //required:para que este componente funcione esta prop debe venir
};

export default Hola; //
