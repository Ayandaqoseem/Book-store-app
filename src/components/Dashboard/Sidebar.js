import React from 'react';
import { Link } from 'react-router-dom'
import './sidebar.scss';
// import Logo from '../../assets/Frame 45.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>
                {/* <img src={Logo} alt='icon' /> */}
                <h1>BookStore</h1>
            </span>

            
        </div>
        <hr/>
            <div className='userDetails'>
                <h3> Welcome { userDetails.name }</h3>
            </div>
            
            <hr className='horizontal' />
       
        <div className='center'>
            
            <ul>
                <p className='title'>MAIN</p>
                <Link to='#'><li>
                    <DashboardIcon  className='icon'/>
                    <span>Dashboard</span>
                </li></Link>
                <p className='title'>LIST</p>
                <Link to='/user'><li>
                    <PersonOutlineOutlinedIcon className='icon' />
                    <span>Users</span>
                </li></Link>
                <Link to='/product'><li>
                    <StoreIcon className='icon' />
                    <span>Products</span>
                </li></Link>
                <Link to='/order'><li>
                    <CreditCardIcon className='icon' />
                    <span>Orders</span>
                </li></Link>
                <Link to='/delivery'><li>
                    <LocalShippingIcon className='icon' />
                    <span>Delivery</span>
                </li></Link>
                <p className='title'>USEFUL</p>
                <Link to='/stat'><li>
                    <AssessmentOutlinedIcon className='icon' />
                    <span>Stats</span>
                </li></Link>
                <Link to='/notification'><li>
                    <NotificationsNoneOutlinedIcon  className='icon'/>
                    <span>Notification</span>
                </li></Link>
                <p className='title'>SERVICES</p>
                <Link to='/system health'><li>
                    <SettingsSystemDaydreamOutlinedIcon className='icon' />
                    <span>System Health</span>
                </li></Link>
                <Link to='/logs'><li>
                    <PsychologyOutlinedIcon className='icon' />
                    <span>Logs</span>
                </li></Link>
                <Link to='/settings'><li>
                    <SettingsOutlinedIcon className='icon' />
                    <span>settings</span>
                </li></Link>
                <p className='title'>USER</p>
                <Link to='team member'><li>
                    <GroupsOutlinedIcon className='icon' />
                    <span>Team member</span>
                </li></Link>
                <Link to='/clients'><li>
                    <SupportAgentOutlinedIcon className='icon' />
                    <span>Clients</span>
                </li></Link>
                <Link to='/profile'><li>
                    <AccountCircleOutlinedIcon className='icon' />
                    <span>Profile</span>
                </li></Link>
                <Link to='/logout'><button><li>
                    <ExitToAppOutlinedIcon className='icon' />
                    <span>Logout</span>
                </li></button></Link>
            </ul>
        </div>
        {/* <div className='bottom'>Color option</div> */}
    </div>
  )
}

export default Sidebar