import React, { useState } from 'react';
import HookContext from './HookContext'

function HookProvider ({ children }) {
  const [number, setNumber] = useState(0);
    return(
      <HookContext.Provider value={  {number, setNumber} }>
        { children }
      </HookContext.Provider>
    )
  }

export default HookProvider