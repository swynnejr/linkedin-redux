import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HeaderOption from './HeaderOption';
import { useDispatch }  from "react-redux";
import { auth } from './firebase';
import { logout} from './features/userSlice';


function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <a href="https://www.linkedin.com/in/sam-wynne-3499a465/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" /></a>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search by title, skill" type="text" />
                </div>
            </div>
            <div className="header__right">
                <a href="https://www.linkedin.com/">
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                </a>
                <a href="https://www.linkedin.com/mynetwork/">
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                </a>
                <a href="https://www.linkedin.com/jobs/">
                    <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                </a>
                <a href="https://www.linkedin.com/messaging/">
                    <HeaderOption Icon={ChatIcon} title="Messaging"/>
                </a>
                <a href="https://www.linkedin.com/notifications/">
                    <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                </a>
                <HeaderOption
                    avatar={true}
                    title='Logout'
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    )


}

export default Header
