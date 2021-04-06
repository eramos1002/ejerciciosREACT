//boton

import React from "react";
import PropTypes from "prop-types";

class Toogle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToogleOn: true,
    };
  }
  handleClick = () => {
    this.setState({ isToogleOn: !this.state.isToogleOn }); //CON EL !THIS.STATE SE NIEGA , PASA A SER LO CONTRARIO DE LO QUE VALIA , PASA A SER FALSE
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToogleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toogle;
