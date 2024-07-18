'use client'
import { useRef, useEffect } from 'react';
import style from './header.module.scss'
import Link from 'next/link';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Twitter, LinkedIn } from '@mui/icons-material';

type Props = {}


const Header = (props: Props) => {
  const videoRef = useRef<any>();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((error:string) => {
        console.error('Autoplay was prevented:', error);
      });
    }
  }, [videoRef]);
    
  return (
    <div className={style.main_container}>
   
    <div >
       <p className={style.tag_line}>
        <img src="./southshore_blue_icon.jpeg" alt='logo' />
        </p>
    <div className={style.header_container}>
      <Link href='/' className={style.brand_logo}>
        <p className={style.logo}>
            <img src="./southshore_blue_icon.jpeg" alt='logo' />
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
            <Link href={'/projects'}><p>Projects</p></Link>
            <Link href={'/contact'}><p>Contact us</p></Link>
          </div>
        </div>
        </div>
        </div>
        <video ref={videoRef} autoPlay muted loop playsInline className={style.myVideo}>
        <source src="https://res.cloudinary.com/dpnza2tuy/video/upload/v1721023520/southshore-video_new_ykqg68.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
        </video>
        </div>
      )
}

export default Header