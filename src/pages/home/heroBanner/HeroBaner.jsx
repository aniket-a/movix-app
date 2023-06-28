import React, { useState, useEffect } from 'react'
import "./heroBanner.scss"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UseFetch from '../../../Hooks/UseFetch'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

const HeroBaner = () => {
  const { url } = useSelector((state) => state.home)
  const [background, setbackground] = useState("")
  const [query, setquery] = useState("")

  const { data, loading } = UseFetch("/movie/upcoming")

  useEffect(() => {
    const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path
    setbackground(bg)
  }, [data])

  const navigate = useNavigate()

  function searchQueryHandler(e) {
    e.preventDefault()
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className='heroBanner'>
      {!loading && <div className="backdrop-img">
        <Img src={background} alt="" />
      </div>}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
          <div className="searchInput">
            <input type="text" placeholder='Search for a movie and TV show...' onKeyUp={searchQueryHandler} onChange={(e) => setquery(e.target.value)} />
            <button className='btn_search'>Search</button>
          </div>
        </div>
      </ContentWrapper>

    </div>
  )
}

export default HeroBaner
