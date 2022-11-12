import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import {Link} from 'react-router-dom';

function Header() {
  const [inputSearch, setInputSearch] = useState('')
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon/>
        <Link to="/">
          <img 
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
          alr="Youtube"
          />
        </Link>
      </div>
      
      <div className="header_input">
        <input onChange={e => setInputSearch(e.target.value)} 
        value={inputSearch} 
        placeholder="Search" 
        type="text"/>
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inpputButton"/>
        </Link>
      </div>
      
      <div className="header_icons">
        <VideoCallIcon className="header_icon"/>
        <AppsIcon className="header_icon"/>
        <NotificationsIcon className="header_icon"/>
        <Avatar
          alt=""
          src="https://yt3.ggpht.com/yti/AJo0G0nH5Y15xLCF6AgAy9InRUlRiOGAic4cUwq2_aUj9pQ=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  )
}

export default Header