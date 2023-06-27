import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { getApiConfiguration } from './store/homeSlice';
import { fetchDataFromApi } from './utils/api';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// importing all components
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
import Home from './pages/home/Home';
import SearchResult from "./pages/searchResult/SearchResult";
import Details from "./pages/details/Details";
import PageNotFound from "./pages/404/PageNotFound";
import Explore from "./pages/explore/Explore";

function App() {

  const {url} = useSelector((state)=> state.home)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    fetchDataFromApi("/configuration")
    .then((res)=> {
      console.log(res)

      const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
      }

      dispatch(getApiConfiguration(url))

    })
  },[])

  return (
    <BrowserRouter >
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mediaType/:id' element={<Details />} />
            <Route path='/search/:query' element={<SearchResult />} />
            <Route path='/explore/:mediaType' element={<Explore />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
