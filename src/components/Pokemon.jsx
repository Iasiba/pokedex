import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import usePokemon from '../hooks/usePokemon'
import axios from "axios"
const Pokemon = () => {
    const { id } = useParams()
    const [pokemon, setpokemon] = useState()
    console.log(id)
    useEffect(() => {
        //`https://pokeapi.co/api/v2/berry/${id}/`
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(data => setpokemon(data.data))
            .catch(err => console.log(err))
            .finally(console.log(pokemon))
    }, [id])

    console.log(pokemon)
    return (
        <div className='pokemonContainer'>
            <header className='Head'>
            </header>
            <section className='pokemon'>
                <div className='pokemonInfo'>

                    <div className='pokemonImg'>
                        <img src={`${pokemon?.sprites.other['official-artwork'].front_default}`} alt="" />
                        <div><h2>{pokemon?.name}</h2></div>
                    </div>



                    <div className='pokemonCharacter'>
                        <div className='type'>
                            <h2>Type</h2>

                        </div>
                        <div className='pokemonAbilities'>
                            <h2>Abilities</h2>
                        </div>
                    </div>
                </div>
                <div className='pokemonMoves'>
                    <div><b>Encounters</b></div>
                    <div>
                        <h2>Movements</h2>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Pokemon