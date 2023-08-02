import React from 'react'
import Navbar from './component/Navbar'
import HeadTitle from './Head'

const RootLayout = ({children}) => {
  return (
    <div>
      <HeadTitle/>
      <Navbar/>
      <div>
            {children}
      </div>
      
    </div>
  )
}

export default RootLayout