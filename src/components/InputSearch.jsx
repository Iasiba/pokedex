import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const InputSearch = () => {
  const navigate = useNavigate()
  const submit = e => {
    e.preventDefault()
    navigate(`/Pokemon/${e.target.firstChild.value}`)
  }
  return (
    <section className='form' >
      <form onSubmit={submit}>
        <input type="text" />
        <button > {' Buscar '} </button>
      </form>
      <div id="menu">
        <li className="dropdown"><a href="">Todos los pokemon</a>
          <ul>
            <li><span></span><a href="#opcion1">opcion</a></li>
            <hr />
            <li><span></span><a href="#opcion2">opcion</a></li>
            <hr />
            <li><span></span><a href="#opcion3">opcion</a></li>
          </ul>
        </li>
      </div>


    </section>

  )
}

export default InputSearch