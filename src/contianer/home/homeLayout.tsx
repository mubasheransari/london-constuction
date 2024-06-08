import ImageSlider from '@/component/imageswiper/imagesSwiper'
import React from 'react'
import style from './homeLayout.module.scss'

type Props = {}

const HomeLayout = (props: Props) => {
  return (
    <div className={style.home_container}>
      <p className={style.heading}>Our Signature Projects</p>
         <ImageSlider />
    </div>
  )
}

export default HomeLayout