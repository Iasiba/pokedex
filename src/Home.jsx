import React, { useEffect, useState } from 'react'
import {
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom'
import Pokedex from './Pokedex'
import Header from './components/Header.jsx'
import poke from './img/pokede.png'
import { useSelector, useDispatch } from 'react-redux'
import { setName } from './store/slices/useSlice.js'
import Pokemon from './components/Pokemon'
import { useForm } from 'react-hook-form'

//let cont=false

const Home = () => {
  const { handleSubmit,register } = useForm()

  const [cont, setcont] = useState(false)
  const dispach = useDispatch()

  useEffect(() => {
    if (cont) {
      //dispach(setName("pepe"))
      setcont(false)
    }
  }, [cont])
  const submit = (data) => {
     dispach(setName(data.nombre))
     setcont(false)
  }
  return (
    <div className='Home'>
      <Header />
      {
      //<Link to='/'>Home</Link>
      //<Link to='/Pokedex'>Pokedex</Link>
      //<Link to='/Pokedex/:id'>Buscar</Link>
    }
      <Routes>
        <Route path="/" element={<div className='Bienvenida'>
          <img src={poke} alt="" />
          <h2>¡Bienvenido a Pokedex!</h2>
          <p>Para poder comenzar registra tu avatar</p>
          <div>
            <label htmlFor="avatar">{<b>Avatar:   </b>}  </label>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <input type="text" id='avatar' placeholder='                avatar' {...register('nombre')} />
            <button onClick={() => setcont(true)} className='Submit'>Comenzar</button>
          </form>

          {cont && <Navigate to="/Pokedex" />}
          
        </div>} />
        <Route path="/Pokedex" element={<Pokedex />} />
        <Route path="/Pokemon/:id" element={<Pokemon />} />
      </Routes>
    </div>
  )
}

export default Home