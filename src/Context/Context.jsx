import React from 'react'
import { useState } from 'react';

import { createContext } from 'react'


export const Context1=createContext();

export const Context = ({children}) => {
    const [PokemonInf, setPokemonInf] = useState([])

const data =[PokemonInf, setPokemonInf]

  return (
    <div>
      <Context1.Provider   value={data} >


    {children}

      </Context1.Provider>





        
    </div>
  )
}
