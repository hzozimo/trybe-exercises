import React, { useState } from 'react';
import Context from '../context/Context'

function Provider () {
  const [number, setNumber] = useState(0);
    const { children } = this.props;
    return(
      <Context.Provider value={ { number, setNumber }}>
        { children }
      </Context.Provider>
    )
  }

export default Provider