import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from './SidebarOption';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core"

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon/>
            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Explore" Icon={SearchIcon}/>
            <SidebarOption text="Notification" Icon={NotificationsNoneIcon}/>
            <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
            <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon}/>
            <SidebarOption text="Lists" Icon={ListAltIcon}/>
            <SidebarOption text="Profile" Icon={PermIdentityIcon}/>
            <SidebarOption text="More" Icon={MoreHorizIcon}/>
            
            

            {/* Button => tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar
