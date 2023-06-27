import React,{useState, useEffect} from 'react'
import "./heroBanner.scss"
import { useNavigate } from 'react-router-dom'
import UseFetch from '../../../Hooks/UseFetch'
import { useSelector } from 'react-redux'

const HeroBaner = () => {
  const {url} = useSelector((state)=> state.home)
  const [background, setbackground] = useState("")
  const [query, setquery] = useState("")

  const {data, loading} = UseFetch("/movie/upcoming")

  useEffect(()=>{
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random(  ) * 20)]?.backdrop_path
    setbackground(bg)
  },[data])

  const navigate = useNavigate()

  function searchQueryHandler(e){
    e.preventDefault()
    if(e.key === "Enter" && query.length > 0){
      navigate(`/search/:${query}`)
    }
  }

  return (
    <div className='heroBanner'>
      <div className="backdrop-img">
          <img src={background} alt="" />
      </div>
        <div className="wrapper">
            <div className="heroBannerContent">
              <span className="title">Welcome</span>
              <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
              <div className="searchInput">
                <input type="text" placeholder='Search for a movie and TV show...' onKeyUp={searchQueryHandler} onChange={(e)=> setquery(e.target.value)}/>
                <button>Search</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBaner
