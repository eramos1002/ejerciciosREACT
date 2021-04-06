import React from "react";
import PropTypes from "prop-types";
import CicloVida from "./CicloVida";

// se crea la clase extendiendo react.component, que es una clase superior
class Contador extends React.Component {
  //Trabajar con los estados, usando un constructor
  constructor(props) {
    // no siempre se añade props
    //uso de la funcion super para tener acceso el estadoe inicializar todas las funcionalidades de las clases que tenemos
    //se recomienda pasar las props, aunque no hace falta
    super(props);
    this.state = {
      // se inicializa el estado y se pone valor, podemos hacer de todos los que querramos
      //cont: 0,
      contador: props.cont,
    };
  }
  aumentarContador = () => {
    //Tenemos que usar la funcion setState para setear o modificar el estado
    this.setState({ contador: this.state.contador + 1 });
  };

  disminuirContador = () => {
    //Tenemos que usar la funcion setState para setear o modificar el estado
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <h1> Contador</h1>
        <span>{this.state.contador}</span>
        <button onClick={this.aumentarContador}>+</button>
        <button onClick={this.disminuirContador}>-</button>
        {/*El clicloVida se vuelve hijo de contador*/}
        {this.state.contador === 10 ? <CicloVida /> : null}
      </div>
    );
  }
}
// el tipado
Contador.defaultProps = {
  cont: 0,
};

Contador.propTypes = {
  cont: PropTypes.number.isRequired,
};

export default Contador;
