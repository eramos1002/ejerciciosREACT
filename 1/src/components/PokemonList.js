import React from "react";
import Pokemon from "./Pokemon";

class PokemonList extends React.Component {
  // al poner en el estado este puede ser actualizado y se vuelve a renderizar
  constructor() {
    super();
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:1010/api/pokemons")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          this.setState({ pokemons: data.pokemons });
        }, 3000); // con esto se ralentiza que desaparezca cargando muy rapido
      });
  }

  render() {
    return (
      <div>
        <h1> LISTA POKEMON </h1>
        <ul>
          {this.state.pokemons.length === 0 ? (
            <h1> Cargando... </h1>
          ) : (
            this.state.pokemons.map((pokemon, i) => {
              return <Pokemon key={`pokemon-list-${i}`} pokemon={pokemon} />;
            })
          )}
        </ul>
      </div>
    );
  }
}

export default PokemonList;
