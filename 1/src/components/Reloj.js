import React from "react";

class Reloj extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: setInterval(this.updateTime, 1000), // Inicializa el estado , 1er parametro es la funcion y el 2 el tiempo
    };
  }
  updateTime = () => {
    this.setState({
      // setstate es cambio de estado
      timer: new Date().toLocaleTimeString(), //to Locale es la hora
    });
  };

  render() {
    return <h2> {this.state.timer} </h2>;
  }
}

export default Reloj;
