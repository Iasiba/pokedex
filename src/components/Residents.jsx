import React from 'react'
import useResident from '../hooks/useResident'

const Residents = ({url}) => {

  const resident = useResident(url)
  //console.log(resident)
  return (
    <article className={`card ${resident?.types[0].type.name}`}>
      <img src={resident?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{resident?.name}</h2>
      <p><b>Type:    </b> <span>{resident?.types?.map(type=> "   "+type.type.name)}</span></p>
      <p><b>Hp: </b>{resident?.stats[0].base_stat}</p>
      <p><b>Attack: </b>{resident?.stats[1].base_stat}</p>
      <p><b>Defense: </b>{resident?.stats[2].base_stat}</p>
      {/*<p><b>Special Attack: </b>{resident?.stats[3].base_stat}</p>*/}
      <p><b>Speed: </b>{resident?.stats[5].base_stat}</p>
      <p><b></b></p>
    </article>
  )
}

export default Residents