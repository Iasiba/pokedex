import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const usePoketype = type => {

  const [pokemon, setpokemon] = useState()

  const URL = `https://pokeapi.co/api/v2/type/${type}/`

  useEffect(() => {
    axios.get(URL)
      .then(res => setpokemon(res.data))
      .catch(err => console.log(err))
  }, [type])


  return pokemon
}

export default usePoketype