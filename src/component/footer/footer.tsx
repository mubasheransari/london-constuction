import React from 'react'
import style from './footer.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Twitter, LinkedIn } from '@mui/icons-material';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={style.footer_container}>
        <p className={style.footer_heading}>Build and Design with us</p>
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
        </div>
        <div className={style.footer_botom}>
        <div className={style.social_links}>
            <p><FacebookIcon/></p>
            <p><InstagramIcon /></p>
            <p><Twitter /></p>
            <p><LinkedIn /></p>
        </div>
        <div>
            <p className='mb-0'>Privacy Policy</p>
            <p>Term & conditions</p>

        </div>
        </div>

    </div>
  )
}

export default Footer