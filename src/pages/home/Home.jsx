import React from 'react'
import "./home.scss"
import HeroBanner from "./heroBanner/HeroBaner"
import Trending from './Tranding/Trending'
import Popular from './popular/popular'
import TopRated from './topRated/TopRated'


const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home
