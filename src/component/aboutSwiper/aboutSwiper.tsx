  "use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css';
import Link from 'next/link';
import style from './aboutSwiper.module.scss'

type Iprops= {
    toggle:()=>void
 
}

const productData =[
  {url:'./south-pexels-heyho-01.jpeg'},
  {url:'./south-pexels-heyho-02.jpeg'},
  {url:'./south-pexels-heyho-03.jpeg'},
  {url:'./south-pexels-heyho-04.jpeg'},
  {url:'./south-pexels-heyho-05.jpeg'},
  {url:'./south-pexels-heyho-06.jpeg'},
  {url:'./south-pexels-monica-07.jpeg'},
  {url:'./south-pexels-olgalioncat-08.jpeg'},
  {url:'./south-pexels-pavel-danilyuk-09.jpeg'},
  {url:'./south-pexels-tima-miroshnichenko-10.jpeg'},
  {url:'./southshare-paints-pixabay.jpeg'},

]

const AboutImageSlider = ({toggle}:Iprops) => {

  return (
    <div className={style.main_container}>
    
    <div className={style.swiper_container}>
    <Swiper
      pagination={true}
      modules={[Navigation,Pagination,Autoplay]}
      navigation={true}
      spaceBetween={10}
      slidesPerView={'auto'}
      // className={style.swiper}
      className='about_swiper'
      autoplay={{
        delay: 1500,
      }}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        1: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        
      }}
    >
      {productData && productData.length >0 && productData.map((item,index)=>{
         const {url} = item
          return(
            <SwiperSlide key ={index+1} onClick={()=>toggle()}>
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

export default AboutImageSlider;    
