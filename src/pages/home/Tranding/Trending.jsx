import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs'
import useFetch from "../../../Hooks/UseFetch"
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {

  const [endPoint, setendPoint] = useState("day")

  const {data, loading} = useFetch(`/trending/all/${endPoint}`)
  
  function onTabChange(tab){
      setendPoint(tab === "Day"? "day": "week")
  }

  return (
    <div>
      <div className="carouselSection">
      <div className='ContentWrapper' >
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={data?.results} loading={loading}/>
      </div>
    </div>
  )
}

export default Trending
