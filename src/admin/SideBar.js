import React from 'react'
import './SideBar.css'
const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><i className='fa-sharp fa-solid fa-gauge-high'/><a href="/admin/dashboard">Dashboard</a></li>
        <li><i className='fa-sharp fa-solid  fa-calendar-days'/><a href="/admin/calender">Calander</a></li>
        <li><i className='fa-sharp fa-solid fa-newspaper'/><a href="/admin/news">News</a></li>
        <li><i className='fa-sharp fa-solid fa-image'/><a href="/admin/photo">Photos</a></li>
      </ul>
    </div>
  )
}

export default SideBar