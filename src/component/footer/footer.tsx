import React from 'react'
import style from './footer.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Twitter, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={style.footer_container}>
      {/* <div className={style.search_bar}>
      <div className={style.input_wrap}>
      <input type='text' placeholder='About Us'/>
      <span className={style.search_icon}>
      <SearchIcon />
      </span>
      </div>

     </div> */}
        <div className={style.footer_main}>
          <div className={`${style.logo}`}>
            <img src='./southshore_blue_icon.jpeg' alt='logo' />
            </div>
          <div className={style.flex_one}>
            <div className='d-flex align-items-center' style={{gap:'20px'}}>
            <p className={style.heading}>Quick links</p>
            <p className={style.line}></p>
            </div>
            <div className={style.links_details}>
              <Link href='/about'><p>About Us</p></Link>
              <Link href='/contact'><p>Contact Us</p></Link>
              <Link href='/projects'><p>Our Projects</p></Link>
              <Link href='/equal-opportunity-policy'><p>Equal Opportunity policy</p></Link>
              <Link href='/modern-slavery-statement'><p>Modern Slavery Statement</p></Link>
            </div>
            </div>
          <div className={style.flex_one}>
            <div className='d-flex align-items-center' style={{gap:'20px'}}>
            <p className={style.heading}>Address</p>
            <p className={style.line}></p>
            </div>
            <div className={style.address}>
              <div>
                <p className={style.sub_heading}>Design & Construction</p>
                <p>
                Highland House, 165-167<br/>The Broadway,<br /> 
                Wimbledon SW19 1NE
                </p>
              </div>
              {/* <div>
              <p className={style.sub_heading}>Maintenance</p>
                
              </div> */}
              <div>
              <p>
                <Link href='tel:07802342616'  target='_blank' style={{textDecoration:'none', color:'#000'}}>
                <MobileFriendlyIcon fontSize='small' /><span className='ms-2'>Mob: 07802342616</span>
                </Link>
                </p>
                <Link href='tel:+4402077409165'  target='_blank' style={{textDecoration:'none', color:'#000'}}>
                <p>
                <PhoneIcon fontSize='small' /><span className='ms-2'>T: +44 020 7740 9165</span>
                </p>
                </Link>
                {/* <p>
                 <EmailIcon fontSize='small'/><span className='ms-2'>Email: info@southshoreprojects.com</span>
                </p> */}
              </div>
            </div>
            </div>
          <div className={style.flex_one}>
             <div className='d-flex align-items-center' style={{gap:'20px'}}>
             <p className={style.heading}>Working Hours</p>
            <p className={style.line}></p>
            </div>
            <div className={style.working}>
              <div>
              <p className={style.sub_heading}>Office Hours</p>
              <p>
                Monday to Saturdays<br/>
                9:00 AM to 6:00 PM
              </p>
              </div>
              {/* <div>
              <p className={style.sub_heading}>Maintenance Hours</p>
              <p>
                Everyday<br/>
                7:00 AM to 12:00 AM
              </p>
              </div> */}

            </div>
            <div>

            </div>
            </div>

        </div>
        <div className={style.footer_botom}>
        <div>
            <p className={style.right_text}>All rights reserved ©southshore projects</p>

        </div>
        <div className={style.social_links}>
            <p><InstagramIcon fontSize='large' /></p>
            <p><LinkedIn fontSize='large' /></p>
            <p><FacebookIcon fontSize='large' /></p>
            <p><Twitter fontSize='large' /></p>
        </div>
       
        </div>

    </div>
  )
}

export default Footer