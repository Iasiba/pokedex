import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import App from './App'


function Pokedex() {
    //const { name } = useParams()
    const name=useSelector(state=>state.nombre)
    return (
        <div className='pokedex'>
            <h2>Bienvenido {name}</h2>
            <span>aqui puedez encontrar pokemones por tipo</span>
            <App/>
        </div>
    )
}

export default Pokedex
