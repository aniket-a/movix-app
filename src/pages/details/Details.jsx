import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../../Hooks/UseFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'

const Details = () => {
  const {mediaType, id} = useParams()
  const {data, loading} = UseFetch(`/${mediaType}/${id}/videos`)
  const {data: credits, loading: creditsLoadings} = UseFetch(`/${mediaType}/${id}/credits`)

  return (
    <div>
      <DetailsBanner  video={data?.results?.[0]} crew={credits?.crew}/>
    </div>
  )
}

export default Details
