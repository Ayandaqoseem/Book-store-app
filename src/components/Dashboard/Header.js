import React from 'react'
import './header.scss';
import ProfileImage from '../../assets/TGIF-2.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Header = () => {
  return (
    <div className='header'>
        <div className='wrapper'>
            <div className='search'>
                <input type='text' placeholder='search...' />
                <SearchOutlinedIcon className='icon' />
            </div>
            <div className='items'>
                <div className='item'>
                    <FullscreenExitOutlinedIcon  className='icon'/>
                
                </div>
                <div className='item'>
                    <LanguageOutlinedIcon  className='icon'/>
                    Englsih
                </div>
                <div className='item'>
                    <NotificationsNoneOutlinedIcon  className='icon'/>
                    <div className='counter'>1</div>
                </div>
                <div className='item'>
                    <ChatBubbleOutlineOutlinedIcon  className='icon'/>
                    <div className='counter'>1</div>
                </div>
                <div className='item'>
                    <ListOutlinedIcon  className='icon'/>
                </div>
                <div className='item'>
                    <img src={ ProfileImage } alt='icon'  className='avater'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header