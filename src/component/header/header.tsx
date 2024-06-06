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

type Props = {}

const Header = (props: Props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
        <p>Company Logo</p>
        <div>Company Name</div>
        
        <div>
            Log In
        </div>
        </div>
        <div className={style.nav_bar}>
            <p>
            <span className='me-1'>Home</span>
             <HomeIcon fontSize="small"/>
                </p>
            <p>
            <span className='me-1'>About</span>
                <InfoIcon fontSize="small" />
                </p>
            <div>
                <p onClick={(e)=>handleClick(e)} >
                <span className='me-1'>Services</span>
                <MiscellaneousServicesIcon fontSize="small" />
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
            <p>
            <span className='me-1'>Gallery</span>
            <CollectionsIcon fontSize="small" /> 
            </p>
            <p>
            <span className='me-1'>Contact Us</span>
            <AddIcCallIcon fontSize="small" />
            </p>
        </div>
        </div>
  )
}

export default Header