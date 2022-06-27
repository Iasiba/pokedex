import React from 'react'

const InputSearch = ({ setInputSearch }) => {

  const submit = e => {
    e.preventDefault()
    setInputSearch(e.target.firstChild.value)
    console.log(e.target.firstChild.value)
  }

  return (
    <form className='form' onSubmit={submit}>
      
        <input type="text" />
        <button> {' Buscar '} </button>
      

      <div id="menu">
        <li class="dropdown"><a href="">Todos los pokemon</a>
          <ul>
            <li><span></span><a href="#opcion1">opcion</a></li>
            <hr />
            <li><span></span><a href="#opcion2">opcion</a></li>
            <hr />
            <li><span></span><a href="#opcion3">opcion</a></li>
          </ul>
        </li>
      </div>

    </form>
  )
}

export default InputSearch