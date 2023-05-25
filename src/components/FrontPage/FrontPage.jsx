import React from 'react'
import './FrontPage.css'

import boton from './Recursos/boton.svg'
import { Link } from 'react-router-dom'



export const FrontPage = () => {
  return (
    <div  className='Container-FronPage'>

        <h1>Pokedex</h1>
        <h4>"Descubre tu Pokemon"</h4>

        <div className='button-Container'>   
        <button className="button"> Get started
        <div class="icon">
          <Link to= '/Home'> <img src={boton} alt="" /></Link> 
        </div>
        </button>
        </div>

    </div>
  )
}
