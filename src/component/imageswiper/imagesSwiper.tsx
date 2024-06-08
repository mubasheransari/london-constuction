"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css';
import Link from 'next/link';
import style from './imagesSwiper.module.scss'

type Iprops= {
 
}

const productData =[
    {url:'./pexels-binyaminmellish-186077.jpg'},
    {url:'./pexels-binyaminmellish-1396122.jpg'},
    {url:'./pexels-emrecan-2079249.jpg'},
    {url:'./pexels-pixabay-280222.jpg'},
    {url:'./pexels-thgusstavo-2102587.jpg'},
    {url:'./pexels-binyaminmellish-186077.jpg'},

]

const ImageSlider = ({}:Iprops) => {

  return (
    <div className={style.swiper_container}>
    <Swiper
      pagination={false}
      modules={[Navigation,Pagination,Autoplay]}
      navigation={true}
      spaceBetween={10}
      slidesPerView={'auto'}
      // className={style.swiper}
      className='swiper'
      autoplay={{
        delay: 1500,
      }}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        1: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        
      }}
    >
      {productData && productData.length >0 && productData.map((item,index)=>{
         const {url} = item
          return(
            <SwiperSlide key ={index+1}>
              <div className={style.card}>
                <img src={url} alt='image'  />
              </div>
            </SwiperSlide>
          )
      })}
    </Swiper>
    </div>
  );
};

export default ImageSlider;