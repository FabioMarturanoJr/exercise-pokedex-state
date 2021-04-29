import React from 'react';
// import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    
  constructor(props) {
    super(props);
    this.switchPokemon = this.switchPokemon.bind(this);
    this.switchFilter = this.switchFilter.bind(this);

    this.state = {
      pokemon: props.pokemons[1],
      key: 0,
      filter: 'Fire',
    };
  }

  switchPokemon() {
    const { pokemons } = this.props;
    const { key, filter } = this.state;
    const pkfiltreds = pokemons.filter((poke) => poke.type === filter);

    if (key > pkfiltreds.length - 2) {
      this.setState({
        pokemon: pkfiltreds[0],
        key: 0,
      });
    } else {
      this.setState({
        pokemon: pkfiltreds[key + 1],
        key: key + 1,
      });
    }
  }

  async switchFilter({ target : { id } }) {
    await this.setState({ filter : id });
    this.switchPokemon();
  }

  render() {        
    return (
      <div>
        <div className="pokedex">
          <Pokemon key={this.state.pokemon.id} pokemon={this.state.pokemon} />
        </div>
        <button onClick={this.switchPokemon}>All</button>
        <div>
          <button onClick={this.switchFilter} className="filterFire" id="Fire">Fire</button>
          <button onClick={this.switchFilter} className="filterPsychic" id="Psychic">Psychic</button>
          <button onClick={this.switchFilter} className="filterElectric" id="Electric">Electric</button>
          <button onClick={this.switchFilter} className="filterBug" id="Bug">Bug</button>
          <button onClick={this.switchFilter} className="filterPoison" id="Poison">Poison</button>
        </div>
        <p>
          Filtro: {this.state.filter}
        </p>
      </div>
    );
  }
}

export default Pokedex;