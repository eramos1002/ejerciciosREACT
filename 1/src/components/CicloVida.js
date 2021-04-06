import React from "react";
import PropTypes from "prop-types";

class CicloVida extends React.Component {
  constructor(props) {
    console.log("Inicio del constructor", props);
    super(props);
    this.state = { soyUnState: "Soy un parametro del estado" };
  }

  handleChange = (event) => {
    this.setState({
      soyUnState: event.target.value,
    });
  };

  // - Se ejecuta justo despues del render
  // - Aqui ya estan los elementos asociados al DOM
  // - Si tiene hijos, este se ejecuta cuando todos sus hijos ya esta montados
  // - Sitio ideal para llamadas ajax u operaciones asincronas
  //el component se ejecuta cuando el render y todos sus hijos hayan terminado renderizar
  componentDidMount() {
    // se ejecuta despues del primer render
    console.log("componentDiMount");
  }

  // - Devuelve un boolean
  // - Si devuelve "true" el componente se actualizara
  // - Se invoca tanto en cambio de props como de state
  // - Por defecto devuelve "true"
  // - Existe para poder optimizar, ya que el re render tiene un coste y podriamos evitarlo
  shouldComponentUpdate(nextProps, nextState) {
    // se ejecuta cuando el componente va a hacer actualizado, antes de actualizarse
    console.log(
      "shouldComponentUpdate: nextProps y nextState: ",
      nextProps,
      nextState
    );
    return true; // debo devolver un boleano
  }

  // - Justo despues del render
  // - Los elementos ya estan en el DOM del navegador con lo que podemos operar con ellos
  componentDidUpdate(prevProps, prevState) {
    // se ejecuta despues de los render sucesivos
    // tiene 2 parametros, lo que son la prop anterior y el estado anterior al cambio
    console.log(
      "componentDidUpdate: prevProps y prevState: ",
      prevProps,
      prevState
    );
  }

  // -Se ejecuta Justo antes de que el componente se va a eliminar del DOM
  // - se usa para limpiar eventos que esten activos
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Ciclo de Vida de un Componente</h1>
        <input placeholder="estado" type="text" onChange={this.handleChange} />
        <p>state.soyUnState: {this.state.soyUnState}</p>
        <p>props.soyUnaProp: {this.props.soyUnaProp}</p>
      </div>
    );
  }
}

CicloVida.defaultProps = {
  soyUnaProp: "Soy el valor default de la prop",
};

CicloVida.propTypes = {
  soyUnaProp: PropTypes.string,
};

export default CicloVida;
