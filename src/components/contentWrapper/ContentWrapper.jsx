import React from 'react'
import "./contentwrapper.scss"

const ContentWrapper = ({children}) => {
  return (
    <div>
      <div className="contentWrapper">{children}</div>
    </div>
  )
}

export default ContentWrapper
