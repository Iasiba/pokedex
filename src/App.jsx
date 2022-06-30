import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import useLocation from './hooks/useLocation'
import Residents from './components/Residents'
import InputSearch from './components/InputSearch'
import Pagination from './components/Pagination'

function App() {

  const [inputSearch, setInputSearch] = useState()
  const location = useLocation(inputSearch)
  console.log(location)
  const [currentPage, setCurrentPage] = useState(1)
  let arrayResidents = []
  const residentPerPage = 8
  if (location?.results.length < residentPerPage) {
    arrayResidents = [...location?.results]
  } else {
    const lastResident = currentPage * residentPerPage
    arrayResidents = location?.results.slice(lastResident - residentPerPage, lastResident)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(location?.results.length / residentPerPage) // 11 = cantidad paginas máximas
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock) // 2 = segundo bloque
  // Analiza si estamos en el último(true) o no(false)
  if (currentBlock * pagesPerBlock >= quantityPages) {
    // Cuando es el último bloque
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
  } else {
    // cuando no es el último bloque
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) {
      arrayPages.push(i)
    }
  }
  console.log(arrayPages)

  /*
    const CardsforPage = 8;
    const pages = Math.ceil(location?.residents.length / CardsforPage)
    let down = 0
    let up = CardsforPage
    let page = 0;
    //let current = 0
    useEffect(() => {
      if (down < 0) {
        page = pages
        //current = pages * CardsforPage - 1
      }
      if (up > pages * CardsforPage) {
        page = 0
        //current = 0
      }
      //if (current < down) page--
      //if (current > up) page++
      if(page === pages) {
        up = location?.residents.length
      } else {
        up = CardsforPage * (page + 1)
      }
      down = CardsforPage * page
  
      arrayPages = location?.residents.slice(down, up)
    }, [current])
  */

  /*
      //
    const [inputSearch, setInputSearch] = useState()
    const location = useLocation(inputSearch)
    console.log(location)
    let arrayPages = []
    const CardsforPage = 8;
    const quantityPages = Math.floor(location?.residents.length / CardsforPage)
  
  
  
  
  
    let down = 0
    let up = CardsforPage
    const [currentPage, setCurrentPage] = useState(0)
    //useEffect(() => {
    if (currentPage < 0) {setCurrentPage(quantityPages)}//botonanterior < tambien tiene que ejecutar page--
    if (currentPage > quantityPages) {setCurrentPage(0)}//botonsiguiente > tambien tiene que ejecutar page++
    if (up > location?.residents.length) {
      up = location?.residents.length
    } else {
      up = CardsforPage * (currentPage + 1)
    }
    down = CardsforPage * currentPage
    arrayPages = location?.residents.slice(down, up)
    //}, [])
  
    console.log(arrayPages)
    let currentBlock=1
    const blocks = Math.ceil(quantityPages / 2)
    let arrayResidents = []
    //const [currentBlock, setCurrentBlock] = useState(1)
    const pageforblock = 2
    //const blocks = Math.ceil(quantityPages / 2)
    let limup = pageforblock
    let limDown = 1
    if (currentBlock > blocks) {
      //setCurrentBlock(1)
    }
    if (currentBlock == 0) {
      //setCurrentBlock(blocks)
    }
  
    if (up > currentBlock * (pageforblock + 1) * CardsforPage) {
      currentBlock++
    }
  
  
    if (pageforblock * currentBlock >= quantityPages) {
      limup = quantityPages
    } else {
      limup = pageforblock * currentBlock
    }
    limDown = pageforblock * (currentBlock - 1)
    for (let i = limDown; i <= limup; i++) {
      console.log(i)
      arrayResidents.push(i)
    }
    console.log(down, " ", up, " x ", currentBlock, (pageforblock + 1), CardsforPage, " ", currentBlock * (pageforblock + 1) * CardsforPage,blocks)
    console.log(arrayResidents, " # #")
  */
  console.log(arrayPages, '%', currentPage, "%", quantityPages, "%", arrayResidents)

  return (
    <div className="App">

      <InputSearch/>
      <Pagination
        arrayPages={arrayPages/*arrayResidents*/}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
      <div className='card-container'>
        {
          arrayResidents/*arrayPages*/?.map(data => (
            <Residents
              key={data.url}
              url={data.url}
            />
          ))
        }
      </div>
      <Pagination
        arrayPages={arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
    </div>
  )
}

export default App
