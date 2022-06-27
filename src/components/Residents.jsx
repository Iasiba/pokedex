import React from 'react'
import useResident from '../hooks/useResident'

const Residents = ({url}) => {

  const resident = useResident(url)
 console.log(resident)
  return (
    <article className='card'>
      <img src={resident?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{resident?.name}</h2>
      <p>Gender: {resident?.gender}</p>
    </article>
  )
}

export default Residents