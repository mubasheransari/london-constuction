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
    <div className={style.header_container}>
        <p>
            <img width={'54px'} src="https://www.lilyhomes.com.au/wp-content/uploads/2020/02/lily-icon.png" />
        </p>
        <div className='h3'>London Construction</div>
        
        <div>
          <PersonIcon fontSize='large' />
        </div>
        </div>
        <div className={style.nav_bar}>
            <Link href='/'>
            <p>
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
            <div>
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
        <Typography sx={{ p: 2 }}>
            <p>Design & Build</p>
            <p>Shop Fitting</p>
            <p>Construction</p>
            <p>Project Management</p>
            <p>Maintaince</p>
        </Typography>
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
        </div>
        </div>
  )
}

export default Header