import React from 'react';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render () {
    const { pokemons } = this.props;
    return(
      <div className='pokedexlist'>
        {pokemons.map((pokemon) => <Pokemon pokemon={pokemon}/>)}
      </div>)
  }
}


export default Pokedex;