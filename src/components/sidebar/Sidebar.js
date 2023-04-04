import './sidebar.css'
import { CalendarTodayOutlined, ChatBubbleOutlineOutlined, GridView, LogoutOutlined, MenuOutlined, WorkOutline } from '@mui/icons-material'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
      <ul className="sidebarList">
          <li className='sidebarListItem sidebarMenu'>
            <MenuOutlined className='sidebarIcon'/>
            <span className="sidebarListItemText"></span>
          </li>
          <li className='sidebarListItem'>
            <GridView className='sidebarIcon'/>
            <span className="sidebarListItemText">Dashboard</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">My Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <ChatBubbleOutlineOutlined className='sidebarIcon'/>
            <span className="sidebarListItemText">Messages</span>
          </li>
          <li className='sidebarListItem'>
            <CalendarTodayOutlined className='sidebarIcon'/>
            <span className="sidebarIconBadge">3</span>
            <span className="sidebarListItemText">Upcoming</span>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem sidebarListItemEnd">
            <button className='sidebarHelp'>Help</button>
          </li>
          <li className='sidebarListItem'>
            <LogoutOutlined className='sidebarIcon'/>
            <span className="sidebarListItemText">Log Out</span>
          </li>
        </ul> 
      </div>
    </div>
  )
}

export default Sidebar