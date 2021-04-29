import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    
  constructor(props) {
    super(props);
    this.switchPokemon = this.switchPokemon.bind(this);

    this.state = {
      pokemon: props.pokemons[0],
      key: 0,
      filter: 'Fire',
    };
  }

  switchPokemon() {
    const { pokemons } = this.props;
    const { key } = this.state;

    if (key > 7) {
      this.setState({
        pokemon: pokemons[0],
        key: 0,
      });
    } else {
      this.setState({
        pokemon: pokemons[key + 1],
        key: key + 1,
      });
    }    
  }

  render() {        
    return (
      <div>
        <div className="pokedex">
          <Pokemon key={this.state.pokemon.id} pokemon={this.state.pokemon} />
        </div>
        <button onClick={this.switchPokemon}>Switch</button>
        <div>
          <button className="filterButton">Fire</button>
          <button className="filterButton">Psychic</button>
        </div>
        <p>
          Filtro: {this.state.filter}
        </p>
      </div>
    );
  }
}

export default Pokedex;