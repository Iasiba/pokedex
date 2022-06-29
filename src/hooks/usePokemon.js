import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function usePokemon ({URL}) {
  const [pokemon, setpokemon] = useState()
  useEffect(() => {
    axios.get(URL)
      .then(res => setpokemon(res.data))
      .catch(err => console.log(err))
  
  }, [URL])
  

  return pokemon
}

export default usePokemon