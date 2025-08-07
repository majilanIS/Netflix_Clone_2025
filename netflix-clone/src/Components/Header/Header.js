import React from 'react'
import './Header.css'
import NetflixLogo from '../../assets/images/Netflix_2015_logo.svg'

//material icons
// MUI (Multiple icons)->Search Material icons ->npm i {} -> after that you can use those material icons directly by importing like the other modules
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
<div className='header-outer-container'>
    <div className='header-container'>
      <div className='header-left'>
        <ul>
          <li><img src={NetflixLogo} alt="Netflix logo" width="100" /></li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>  
      
      <div className='header-right'>
        <ul>
          <li><SearchIcon /></li>
          <li><NotificationsIcon /></li>
          <li><AccountBoxIcon /></li>
          <li><ArrowDropDownIcon /></li>
          
        </ul>
      </div> 
    </div>
    </div>
  )
}

export default Header
