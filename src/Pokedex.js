import React from 'react';
import ButtonAll from './components/ButtonAll';
import ButtonFilter from './components/ButtonFilter';
import Pokemon from './components/Pokemon';

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

  switchFilter({ target : { id } }) {
    this.setState({ filter : id }, this.switchPokemon);
  }

  render() {
    const { pokemons } = this.props;
    const onlyTypes = [...new Set(pokemons.map((pk) => pk.type))];

    return (
      <div>
        <div className="pokedex">
          <Pokemon key={this.state.pokemon.id} pokemon={this.state.pokemon} />
        </div>
        <ButtonAll switchPk={this.switchPokemon} />
        <div>
          { onlyTypes
            .map((type) => <ButtonFilter filterPk={ this.switchFilter } filter={ type } key={ type }/>) }
        </div>
        <p>
          Filtro: {this.state.filter}
        </p>
      </div>
    );
  }
}

export default Pokedex;
