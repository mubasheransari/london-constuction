import React from 'react'
import style from './header.module.scss'
import Link from 'next/link';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Twitter, LinkedIn } from '@mui/icons-material';

type Props = {}


const Header = (props: Props) => {
    
  return (
    <div className={style.main_container}>
   
    <div >
       <p className={style.tag_line}>
        <img src="./southshore_logo.jpg" alt='logo' />
        </p>
    <div className={style.header_container}>
      <Link href='/' className={style.brand_logo}>
        <p className={style.logo}>
            <img src="./southshore_logo.jpg" alt='logo' />
        </p>
        </Link>
        <div className={style.social_links}>
            <p><FacebookIcon /></p>
            <p><Twitter /></p>
            <p><InstagramIcon /></p>
            <p><LinkedIn /></p>
        </div>
        <div className={style.heading}>
          <p className={style.text}>Southshore Projects</p>
          <p className={style.tagLine}>Building Your Dreams into Reality</p>
          </div>
        
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
        </div>
        <video autoPlay muted loop className={style.myVideo}>
        <source src="./video_southshore.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
        </video>
        </div>
      )
}

export default Header