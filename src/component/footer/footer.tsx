import React from 'react'
import style from './footer.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Twitter, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={style.footer_container}>
        {/* <p className={style.footer_heading}>Build and Design with us</p>
        <div>
        <p className='mb-0'>info@south-shore.com</p>
        <p  className='mb-0'>tel:0900-111-1111-444</p>
        <p className='mb-0'>Address: abc building #05, Empire Estate,London</p>
        <p className='h4 mt-3'>Working Hours</p>
        <p className=' h5 mb-0'>Office Hours</p>
        <p className='mb-0'>Monday to Saturday</p>
        <p>9:00 AM to 6:00 PM</p>
        <p className=' h5 mb-0'>Maintenance Hours</p>
        <p className='mb-0'>Everyday</p>
        <p>7:00 PM to 12:00 PM</p>
        </div> */}
        <div className={style.footer_main}>
          <div className={`${style.logo}`}>
            <img src='./southshore_logo.jpg' alt='logo' />
            </div>
          <div className={style.flex_one}>
            <p className={style.heading}>Quick links</p>
            <div className={style.links_details}>
              <Link href='/about'><p>About Us</p></Link>
              <Link href='/contact'><p>Contact Us</p></Link>
              <Link href='/'><p>Our Projects</p></Link>
              <Link href='/'><p>Privacy Policy</p></Link>
              <Link href='/'><p>Cookies</p></Link>
              <Link href='/'><p>Terms and  Conditions</p></Link>
              <Link href='/'><p>Carrers</p></Link>
              <Link href='/'><p>Equal Opportunity policy</p></Link>
              <Link href='/'><p>Modern Slavery Statement</p></Link>
            </div>
            </div>
          <div className={style.flex_one}>
            <p className={style.heading}>Address</p>
            <div className={style.address}>
              <div>
                <p className={style.sub_heading}>Design & Construction</p>
                <p>
                abc building street 205,<br/> Empire Estate,London
                </p>
              </div>
              <div>
              <p className={style.sub_heading}>Maintenance</p>
                <p>
                xyz building street 105,<br/> Mayfair Estate,London
                </p>
              </div>
              <div>
                <p  className='mb-0'>
                <PhoneIcon fontSize='small' /><span className='ms-2'>T: 020 1111 2222</span>
                </p>
                <p>
                 <EmailIcon fontSize='small'/><span className='ms-2'>Email: info@south-shore.com</span>
                </p>
              </div>
            </div>
            </div>
          <div className={style.flex_one}>
            <p className={style.heading}>Working Hours</p>
            <div className={style.working}>
              <div>
              <p className={style.sub_heading}>Office Hours</p>
              <p>
                Monday to Saturdays<br/>
                9:00 AM to 6:00 PM
              </p>
              </div>
              <div>
              <p className={style.sub_heading}>Maintenance Hours</p>
              <p>
                Everyday<br/>
                7:00 AM to 12:00 AM
              </p>
              </div>

            </div>
            <div>

            </div>
            </div>

        </div>
        <div className={style.footer_botom}>
        <div>
            <p className='mb-0'>All rights reserved ©south shore projects Ltd Company</p>

        </div>
        <div className={style.social_links}>
            <p><FacebookIcon/></p>
            <p><InstagramIcon /></p>
            <p><Twitter /></p>
            <p><LinkedIn /></p>
        </div>
       
        </div>

    </div>
  )
}

export default Footer