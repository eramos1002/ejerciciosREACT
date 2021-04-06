import React from "react";
import PropTypes from "prop-types";

//BUCLES QUE GENERA COMPONENTES
class Fruta extends React.Component {
  render() {
    return (
      <li>
        <span> {this.props.fruta.name} </span>
        <span> {this.props.fruta.qty} </span>
      </li>
    );
  }
}

Fruta.propTypes = {
  fruta: PropTypes.shape({
    name: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
  }),
};

export default Fruta;
