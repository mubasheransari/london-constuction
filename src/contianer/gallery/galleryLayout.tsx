import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import style from "./gallery.module.scss"

const productData =[
  // {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025507/south-pexels-olgalioncat-08-min_glhjgp.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025507/south-pexels-tima-miroshnichenko-10-min_j4qr1l.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/south-pexels-monica-07-min_zvdujn.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/south-pexels-heyho-03-min_ijzqtw.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/south-pexels-heyho-02-min_xhui4w.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/pexels-olgalioncat-7245328-min_trab4x.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-05-min_qae5vh.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941272/south-pexels-pavel-danilyuk-09_scavqt.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-06-min_uxqhuc.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-01-min_u44mec.jpg'},
  {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941296/southshare-paints-pixabay_wx6bhf.jpg'},
  // {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941259/south-pexels-heyho-03_eciurd.jpeg'},
  // {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941245/south-pexels-heyho-04_bny2t7.jpeg'},
  // {url:'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941296/southshore-pexels-heyho_pi6iah.jpeg'},

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

