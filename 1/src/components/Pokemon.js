import React from "react";
import PropTypes from "prop-types";

// se crea este componente por repetirse en varias ocasiones
class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props; // pasamos información a este componente por las props
    return (
      <li>
        {pokemon.name} - {pokemon.type}
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
