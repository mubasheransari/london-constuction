import ImageSlider from '@/component/imageswiper/imagesSwiper'
import React from 'react'
import style from './homeLayout.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link'
import { about_features } from '@/component/data/data'
import Lightbox from '@/component/lightbox/lightbox';

type Props = {}

const HomeLayout = (props: Props) => {

  return (
    <div className={style.home_container}>
    <div className={style.about_top}>
     <p className={style.heading}>Who are we</p>
     <p className={style.divider}></p>
     <div className={style.about_slider_wrap}>
      <div className={style.slider}>
      <Lightbox />
      </div>
      <div className={style.about_txt}>
        {/* <p className={style.sub_heading}>About us</p> */}
        <p className={style.introduction_txt}>
        Welcome to Southshore Projects, where innovation meets craftsmanship. We are dedicated to transforming your vision into tangible 
        structures with unparalleled quality and precision. Our team of experts ensures every project is executed to the highest standards, 
        making us a leader in the construction industry.
        </p>
      </div>
     </div>
      <div className={style.features_wrap}>
        {about_features.map((item,index)=>{
          return(
            <React.Fragment key={'features'+index}>
              <p className={style.feature_sub_heading}>{item.subline}</p>
              <p className={style.features_text}>{item.text}</p>

            </React.Fragment>
          )
        })}
      </div>
     </div>
     <ImageSlider />
    </div>
  )
}

export default HomeLayout