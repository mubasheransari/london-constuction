import React from 'react'
import style from './footer.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={style.footer_container}>
        <p className={style.footer_heading}>Build and Design with us</p>
        <div>
        <p className='mb-0'>info@london_construction.com</p>
        <p  className='mb-0'>tel:0900-111-1111-444</p>
        <p className='mb-0'>Address: abc building #05, Empire Estate,London</p>
        </div>
        <div className={style.footer_botom}>
        <div className={style.social_links}>
            <p  className='mb-0'><FacebookIcon/></p>
            <p><InstagramIcon /></p>
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