import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import style from "./gallery.module.scss"

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

