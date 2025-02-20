import React from 'react'
import { Outlet } from 'react-router-dom'
import Homepage from './Banner/Banner'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import FetchingData from './LoadBooks/FetchingData'

const Root = () => {
  return (
    <div>

     <div className="flex px-6 flex-col min-h-screen">
     <Header></Header>
     
     <div className="outlet flex-grow">
     <Outlet></Outlet>
     </div>

     {/* <Footer></Footer> */}
     </div>
    </div>
  )
}

export default Root
