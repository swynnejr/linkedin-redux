import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./Sidebar.css"

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://sayyestodallas.com/wp-content/uploads/2020/07/Dallas-skyline.jpg" alt="Dallas Skyline" />
                <Avatar src={user.photoUrl} className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>

                <a href="https://www.linkedin.com/in/samwynne214/">
                    <h2>{user.displayName}</h2>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saucersam@gmail.com&su=Welcome%20Aboard!&body=Your%20LinkedIN%20project%20blew%20us%20away">
                    <h4>{user.email}</h4>
                </a>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p id="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p id="sidebar__statNumber">1,438</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                <a href="https://www.linkedin.com/search/results/all/?keywords=reactjs&origin=GLOBAL_SEARCH_HEADER">{recentItem('reactjs')}</a>
                <a href="https://www.linkedin.com/search/results/all/?keywords=programming&origin=GLOBAL_SEARCH_HEADER">{recentItem('programming')}</a>
                <a href="https://www.linkedin.com/search/results/all/?keywords=software%20engineering&origin=GLOBAL_SEARCH_HEADER">{recentItem('softwareengineering')}</a>
                <a href="https://www.linkedin.com/search/results/all/?keywords=design&origin=GLOBAL_SEARCH_HEADER">{recentItem('design')}</a>
                <a href="https://www.linkedin.com/search/results/all/?keywords=developer&origin=GLOBAL_SEARCH_HEADER">{recentItem('developer')}</a>
            </div>
        </div>
    )
}

export default Sidebar
