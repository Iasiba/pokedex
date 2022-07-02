import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setEspecificValue} from '../store/slices/typesSlice'
import { useNavigate } from 'react-router-dom'
const InputSearch = () => {
  const dispach = useDispatch()
  const navigate = useNavigate()
  const submit = e => {
    e.preventDefault()
    navigate(`/Pokemon/${e.target.firstChild.value}`)
  }
  const [type, setType] = useState([])
  
  useEffect(() => {
  axios.get(`https://pokeapi.co/api/v2/type/`)
  //axios.get(`https://pokeapi.co/api/v2/type/${id}/`)
      .then(data => setType(data.data.results.map(data=>data=data.name)))
      .catch(err => console.log(err))
}, [])
console.log(type)
  return (
    <section className='form' >
      <form onSubmit={submit}>
        <input type="text" />
        <button > {' Buscar '} </button>
      </form>
      <div id="menu">
        <li className="dropdown"><a onClick={()=>dispach(setEspecificValue(""))}>Todos los pokemon</a>
          <ul>
            <li>{type.map(type=><a onClick={()=>dispach(setEspecificValue(type))} className="typ">{type}</a>)}</li>
          </ul>
        </li>
      </div>
    </section>
  )
}

export default InputSearch