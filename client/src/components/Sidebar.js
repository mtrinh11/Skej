import React, {useState, useEffect} from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../styles/SidebarStyles.css';

import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import EventNoteIcon from '@material-ui/icons/EventNote';
import DehazeIcon from '@material-ui/icons/Dehaze';

export default (props) => {
    const [collapsed, setCollapsed] = useState(true)

    useEffect(() => {
        setCollapsed(true)
    }, [])

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    } 

    const pushToHomepage = () => {
        props.history.push('/')
    }

    const pushToSignupPage = () => {
        props.history.push('/signup')
    }
    const pushToLoginPage = () => {
        props.history.push('/login')
    }
    const pushToCalenderPage = () => {
        props.history.push('/calendar')
    }


    return(
        <ProSidebar 
        style={{backgroundColor: 'white'}}
        collapsed={collapsed}
        >
            <Menu iconShape="circle">
                <MenuItem icon={<DehazeIcon/>} onClick={() => toggleCollapsed()}>
                </MenuItem>
            </Menu>
            <Menu iconShape="circle">
                
                <MenuItem icon={<HomeIcon />} onClick={() => pushToHomepage()}>
                    <h3>Home</h3>
                </MenuItem>
            
                <MenuItem icon={<CreateIcon />} onClick={() => pushToSignupPage()}>
                    <h3>Sign Up</h3>
                </MenuItem>
                <MenuItem icon={<PlayForWorkIcon />} onClick={() => pushToLoginPage()}>
                    <h3>Log In</h3>
                </MenuItem>
                <MenuItem icon={<EventNoteIcon />} onClick={() => pushToCalenderPage()}>
                    <h3>Calender</h3>
                </MenuItem>
                {/* <SubMenu title="Components" icon={<FaHeart />}>
                <MenuItem>
                </MenuItem>
                </SubMenu> */}
            </Menu>
        </ProSidebar>
    )
}