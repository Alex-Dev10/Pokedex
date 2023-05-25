import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import './Pokedex.css'

export const Card = ({Pokemon, viewDetails}) => {

    const [PokemonInf, setPokemonInf] = useState([])

axios
.get(Pokemon.url)
.then((response)=>{
    //console.log(response.data)
    setPokemonInf({
    name:response.data.name,
    height:response.data.height,
    weight:response.data.weight,
    type:response.data.type,
    abilities:response.data.abilities,
    image:response.data.sprites.front_default,




}
    )

})


  return (
    
  

    <div class="card">

    <div class="card-details">
      <p class="text-title">{PokemonInf.name}</p>
      <img src={PokemonInf.image} alt="" />
     
    </div>
    <button class="card-button" onClick={viewDetails}  >More info</button>
  </div>

  

 
  )
}
