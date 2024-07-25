import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import style from "./gallery.module.scss"

const productData =[
  // {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941296/southshare-paints-pixabay_wx6bhf.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941295/south-pexels-monica-07_iyeauu.jpeg'},
  // {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941294/southshore-pexels-olgalioncat_zbnge8.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941288/south-pexels-tima-miroshnichenko-10_fnbbmu.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941285/south-pexels-heyho-06_uiubxw.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941284/south-pexels-heyho-05_jgiody.jpeg'},
  // {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941278/south-pexels-olgalioncat-08_dwd20e.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941274/south-pexels-heyho-01_ul2bkp.jpeg'},
  // {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941272/south-pexels-pavel-danilyuk-09_scavqt.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941263/south-pexels-heyho-02_albve7.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941259/south-pexels-heyho-03_eciurd.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941245/south-pexels-heyho-04_bny2t7.jpeg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941296/southshore-pexels-heyho_pi6iah.jpeg'},

]


export default function GalleryLayout() {
  return (
    <div className={style.gallery_container}>
    <p  className={`text-center mt-3 ${style.heading}`}>Our Gallery</p>
    <ImageList  cols={3} sx={{ width: '100%', maxWidth:'1600px', margin:'auto', marginTop:'20px'}} >
      {productData.map((item) => (
        <ImageListItem key={item.url} classes={{img:style.list_img}}>
         
          <img
            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
            alt={'image'}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

