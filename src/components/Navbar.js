import { useState } from "react"
import Sidebar from "./Sidebar"

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
import { icon } from "@fortawesome/fontawesome-svg-core"

export default function Navbar(){
    const [showSidebar,setShowSidebar] = useState(true)
    const links = [
      {
        name: "Home",
        path: "/",
        icon: faHome
      },
      {
        name: "Recipes",
        path: "/recipes",
        icon: faList
      },
      {
        name: "Settings",
        path: "/settings",
        icon: faCog
      },
    ]
    function closeSidebar(){
      setShowSidebar(false)
    }
    return(
        <>
        <div className="navbar container">
          <a href="#!" className="logo">Foodie<span>Space</span></a>
          <div className="nav-links">
          { links.map(link =>(<a href="#!"key={link.name}>{link.name}</a>))}
          {/* <a href="#!">Home</a>
          <a href="#!">Recipes</a>
          <a href="#!">Settings</a> */}
          
          </div>
          <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ?"sidebar-btn active" : "sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
           
          </div>
           
        </div>
        { showSidebar && <Sidebar close={closeSidebar} links={links}/>}
  
        {/* <Sidebar links={links}/> */}
        </>
    )
}