import React from 'react'
import "./home.scss"
import HeroBanner from "./heroBanner/HeroBaner"
import Trending from './Tranding/Trending'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <div style={{height:"1000px"}}></div>
    </div>
  )
}

export default Home
