import './App.css'
import followDatas from './followDatas'
import overviewDatas from './overviewDatas'
import Follower from './component/Follower'
import Overview from './component/Overview'
import React, { useState } from 'react'
import './style/Follower.css'
import './style/Overview.css'



function App() {
  const [mode, setMode] = useState(true)

  const headerStyle = {
    background: mode ? "hsl(232, 19%, 15%)" : "hsl(225, 100%, 98%)"
  }
  const h1Header = {
    color: mode ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)"
  }
  const pHeader = {
    color: mode ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)"
  }
  const infoContainer = {
    background: mode ? " hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)"
  }

  const followElement = followDatas.map(followData=>{
    return(
      <Follower
        followData = {followData} 
        mode = {mode} 
      />
    )
  })
  const overviewElement = overviewDatas.map(overviewData =>{
    return(
      <Overview
        overviewData = {overviewData}
        mode = {mode}
      />
      
    )
  })

  return (
    

<div className='container' >
    <div className="header" style={headerStyle}>
      <div className="social_title">
        <h1 style={h1Header}>Social Media Dashboard </h1>
        <p style={pHeader}>Total Followers: 23,004</p>
        <div className='line'></div>
      </div>
      <div className="dark_contain">
        <h4 style={h1Header}>Dark Mode </h4>
        <label className='toggle' htmlFor="myToggle" >
         <input className='toggle__input' type="checkbox" id="myToggle" onChange={()=>{
        setMode((prev) => !prev)
       }}/>
         <div className="toggle__fill"></div>
       </label>
      </div>

    </div>
    <div className="info_container" style={infoContainer}>
      <div className="follow_element_container">
      {followElement}
      </div>
      <div className="overview-title">
        <h2>Overview - Today</h2>
      </div>
      <div className="overview_element_container">
      {overviewElement}
      </div>

      <footer className='footer'> Coded by ravanCode </footer>
    
    </div>

   
    


   </div>

  
  )
}

export default App
