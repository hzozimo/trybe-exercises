import React from 'react';

class Pokemon extends React.Component {
  render () {
    const { pokemon } = this.props;
    return( 
        <div className="pokemoncard"> 
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>{pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
          <img src={pokemon.image} alt={pokemon.name}/>
        </div>
    );
  }
}

export default Pokemon;