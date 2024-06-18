import ImageSlider from '@/component/imageswiper/imagesSwiper'
import React from 'react'
import style from './homeLayout.module.scss'
import Link from 'next/link'

type Props = {}

const HomeLayout = (props: Props) => {
  return (
    <div className={style.home_container}>
      <p className={style.img_wrap}>
        <img src='./pexels-pixabay-280222.jpg'  alt='image' />
      </p>
      <div className={style.about_wrap}>
      <p className={style.about_heading}>About Us.</p>
      <div>
      <p className={style.about_txt}>
      Welcome to South Shore, where innovation meets craftsmanship. We are dedicated to transforming your vision into tangible structures 
      with unparalleled quality and precision. Our team of experts ensures every project is executed to the highest standards, making us a 
      leader in the construction industry.
      </p>
      <Link href='/about'>
      <p className={style.read_btn}>Read More</p>
      </Link>
      </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default HomeLayout