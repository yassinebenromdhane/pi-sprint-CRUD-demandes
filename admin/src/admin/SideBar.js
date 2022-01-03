import React from 'react'
import { NavLink } from 'react-router-dom'
import {  FaGem } from 'react-icons/fa'
import {  BsFillChatLeftTextFill, BsFillCalendarEventFill } from 'react-icons/bs'

const SideBar = () => {
  return (
    <div>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <NavLink to="/" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">DashBoard Prof</span> </NavLink>
            <div className="nav_list"> 
              <NavLink to="/" className="nav_link active"> <FaGem /> <span className="nav_name">Dashboard</span></NavLink> 
              <NavLink to="/demands" className="nav_link "> <BsFillCalendarEventFill /> <span className="nav_name">Gestion des Evenements</span></NavLink> 
               
              
            </div>
          </div> <NavLink to=""  className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default SideBar
