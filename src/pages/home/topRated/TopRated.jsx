import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs'
import useFetch from "../../../Hooks/UseFetch"
import Carousel from '../../../components/carousel/Carousel'

const TopRated = () => {

  const [endPoint, setendPoint] = useState("movie")

  const {data, loading} = useFetch(`/${endPoint}/top_rated`)
  
  function onTabChange(tab){
      setendPoint(tab === "Movies"? "movie": "tv")
  }

  return (
    <div>
      <div className="carouselSection">
      <div className='ContentWrapper' >
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "Tv shows"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
      </div>
    </div>
  )
}

export default TopRated
