"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css';
import Link from 'next/link';
import style from './imagesSwiper.module.scss'

type Iprops= {
 
}

const productData =[
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941296/southshare-paints-pixabay_wx6bhf.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941295/south-pexels-monica-07_iyeauu.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941294/southshore-pexels-olgalioncat_zbnge8.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941288/south-pexels-tima-miroshnichenko-10_fnbbmu.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941285/south-pexels-heyho-06_uiubxw.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941284/south-pexels-heyho-05_jgiody.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941278/south-pexels-olgalioncat-08_dwd20e.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941274/south-pexels-heyho-01_ul2bkp.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941272/south-pexels-pavel-danilyuk-09_scavqt.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941263/south-pexels-heyho-02_albve7.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941259/south-pexels-heyho-03_eciurd.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941245/south-pexels-heyho-04_bny2t7.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941296/southshore-pexels-heyho_pi6iah.jpeg'},

]

const ImageSlider = ({}:Iprops) => {

  return (
    <div className={style.main_container}>
    
    <div className={style.swiper_container}>
    <Swiper
      pagination={false}
      modules={[Navigation,Pagination,Autoplay]}
      navigation={true}
      spaceBetween={10}
      slidesPerView={'auto'}
      className='swiper'
      autoplay={{
        delay: 1500,
      }}
      loop={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        1: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoplay:false
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        
      }}
    >
      {productData && productData.length >0 && productData.map((item,index)=>{
         const {url} = item
          return(
            <SwiperSlide key ={index+1}>
              <div className={style.card}>
                <img src={url} alt='image'  loading="lazy"  />
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
          )
      })}
    </Swiper>
    </div>
    </div>
  );
};

export default ImageSlider;