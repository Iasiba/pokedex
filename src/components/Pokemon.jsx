import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import usePokemon from '../hooks/usePokemon'
import axios from "axios"
const Pokemon = () => {
    const { id } = useParams()
    const [pokemon, setpokemon] = useState()
    useEffect(() => {
        //`https://pokeapi.co/api/v2/berry/${id}/`
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        //axios.get(`https://pokeapi.co/api/v2/type/${id}/`)
            .then(data => setpokemon(data.data))
            .catch(err => console.log(err))
    }, [id])
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
                            <h2 >Type</h2>
                            {pokemon?.types?.map(type=><div>{type.type.name}</div>)}
                        </div>
                        <div className='pokemonAbilities'>  
                            <h2>Abilities</h2>
                            {pokemon?.abilities?.map(Ability=><div className='pokemonAbility'  key={Ability?.ability?.name}>{Ability?.ability?.name}</div> )}  
                        </div>
                    </div>
                </div>
                <div className='pokemonMoves'>
                    <div><b>Encounters</b></div>
                    <div>
                        <h2>Movements</h2>
                        {pokemon?.moves?.map(pokemon=><div className='pokemonMove' key={pokemon.move.name}>{pokemon.move.name}</div>)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pokemon