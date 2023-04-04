import React from 'react'
import './topbar.css'
import {Search, WorkspacePremiumOutlined, NotificationsNoneOutlined, ChatBubbleOutlineOutlined} from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <img className='logoImage' src='/assets/logo.png'/>
            <span className="logo">AVIATE</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search fontSize="large" className='searchIcon'/>   
                <input placeholder='Type for Search' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <ChatBubbleOutlineOutlined/>
                    <span className="topbarIconBadge">3</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsNoneOutlined/>
                    <span className="topbarIconBadge">8</span>
                </div>
                <div className="topbarIconItem">
                    <WorkspacePremiumOutlined/>
                    <span className="topbarIconBadge"></span>
                </div>
            </div>
            <div className="topbarUser">
            <img src="/assets/person/8.jpeg" alt="" className="topbarImg" />
            <div className="topbarUserDetail">
                <span className="topbarUserName">Venessa</span>
                <button className='topbarUserProfile'>EDIT MY PROFILE</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar