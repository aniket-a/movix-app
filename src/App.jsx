import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useEffect } from 'react'

function App() {

  useEffect(()=>{
    fetchDataFromApi("/movie/popular")
    .then((res)=> console.log(res))
  },[])

  return (
    <div className="APP">
      <h1>HELLO REACT</h1>
    </div>
  )
}

export default App
