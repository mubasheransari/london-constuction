import React from 'react'
import style from './header.module.scss'
import Link from 'next/link';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';

type Props = {}


const Header = (props: Props) => {
    
  return (
    <div className={style.main_container}>
       <p className={style.tag_line}>Building Your Dreams into Reality</p>
    <div className={style.header_container}>
      <Link href='/' className={style.brand_logo}>
        <p className={style.logo}>
            <img src="https://www.lilyhomes.com.au/wp-content/uploads/2020/02/lily-icon.png" />
        </p>
        </Link>
        <div className={style.heading}>South Shore</div>
        
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
  )
}

export default Header