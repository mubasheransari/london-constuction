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
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025507/south-pexels-olgalioncat-08-min_glhjgp.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025507/south-pexels-tima-miroshnichenko-10-min_j4qr1l.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/south-pexels-monica-07-min_zvdujn.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/south-pexels-heyho-03-min_ijzqtw.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/south-pexels-heyho-02-min_xhui4w.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/pexels-olgalioncat-7245328-min_trab4x.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-05-min_qae5vh.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-06-min_uxqhuc.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-01-min_u44mec.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941296/southshare-paints-pixabay_wx6bhf.jpg'}
  // {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941259/south-pexels-heyho-03_eciurd.jpeg'},
  // {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941245/south-pexels-heyho-04_bny2t7.jpeg'},
  // {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941296/southshore-pexels-heyho_pi6iah.jpeg'},

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