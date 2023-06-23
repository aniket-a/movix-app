import './App.css'
import { getApiConfiguration } from './store/homeSlice';
import { fetchDataFromApi } from './utils/api';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'


function App() {

  const {url} = useSelector((state)=> state.home)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    fetchDataFromApi("/movie/popular")
    .then((res)=> 
      dispatch(getApiConfiguration(res))
    )
  },[])

  return (
    <div className="APP">
      <h1 style={{color:"white"}}>HELLO REACT {url.total_results}</h1>
    </div>
  )
}

export default App
