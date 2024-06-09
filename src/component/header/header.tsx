"use client"
import React, { useState } from 'react'
import style from './header.module.scss'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';

type Props = {}


const Header = (props: Props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

  return (
    <div className={style.main_container}>
       <p className={style.tag_line}>Building Your Dreams into Reality</p>
    <div className={style.header_container}>
      <Link href='/' className={style.brand_logo}>
        <p className={style.logo}>
            <img src="https://www.lilyhomes.com.au/wp-content/uploads/2020/02/lily-icon.png" />
        </p>
        </Link>
        <div className={style.heading}>South Share</div>
        
        <div className={style.log_in}>
          <HamburgerMenu />
          <div className={style.nav_list}>
            <Link href='/'><p>Home</p></Link>
            <Link href={'/about'}><p>About</p></Link>
            <Link href='/services'><p>Services</p></Link>
            <Link href={'/gallery'}><p>Gallery</p></Link>
            <Link href={'/contact'}><p>Contact us</p></Link>
          </div>
        </div>
        </div>
        {/* <div className={style.nav_bar}>
            <Link href='/'>
            <p className={style.log_in}>
            <span>
            <HomeIcon fontSize="small"/>
            </span>
            <span className='ms-1'>Home</span>
            </p>
            </Link>
            <Link href='/about'>
            <p>
            <InfoIcon fontSize="small" />
            <span className='ms-1'>About</span>
            </p>
            </Link>
            <div className={style.service}>
                <p onClick={(e)=>handleClick(e)} >
                <MiscellaneousServicesIcon fontSize="small" />
                <span className='ms-1'>Services</span>
                </p>
                <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
              > 
            <div className={style.opt}>
            <Link onClick={handleClose} href='/services'><p>Design & Build</p></Link>
            <Link onClick={handleClose} href='/services'><p>Shop Fitting</p></Link>
            <Link onClick={handleClose} href='/services'><p>Construction</p></Link>
            <Link onClick={handleClose} href='/services'><p>Project Management</p></Link>
            <Link onClick={handleClose} href='/services'><p>Maintaince</p></Link>
            </div>
                </Popover>
                </div>
            <Link href='/gallery'>
            <p>
            <CollectionsIcon fontSize="small" /> 
            <span className='ms-1'>Gallery</span>
            </p>
            </Link>
            <Link href='/contact'>
            <p>
            <AddIcCallIcon fontSize="small" />
            <span className='ms-1'>Contact Us</span>
            </p>
            </Link>
        </div> */}
       
        </div>
  )
}

export default Header