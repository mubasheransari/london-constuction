import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import style from "./gallery.module.scss"

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1718030463382-896949a8d53a',
      title: 'south_shore',
    },
    {
      img: 'https://images.unsplash.com/photo-1554435493-93422e8220c8',
      title: 'south_shore',
    },
    {
      img: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8',
      title: 'south_shore',
    },
    {
      img: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8',
      title: 'south_shore',
    },
    {
      img: 'https://images.unsplash.com/photo-1481253127861-534498168948',
      title: 'south_shores',
    },
    {
      img: 'https://images.unsplash.com/photo-1685217392890-33c691273364',
      title: 'south_shore',
    },
    {
      img: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e',
      title: 'south_shore',
    },
    {
      img: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625',
      title: 'south_shore',
    },
    {
      img: 'https://images.unsplash.com/photo-1462396240927-52058a6a84ec',
      title: 'south_shore',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1680157071172-ec9fb6dddea3',
      title: 'south_shore',
    },
    {
      img: 'https://images.unsplash.com/photo-1515733392795-4fbb2be3d1dd',
      title: 'south_shorer',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1680281936997-fd05afbde4f0',
      title: 'south_shore',
    },
  ];

export default function GalleryLayout() {
  return (
    <div className={style.gallery_container}>
    <p  className={`text-center mt-3 ${style.heading}`}>Our Gallery</p>
    <ImageList  cols={3} sx={{ width: '100%', maxWidth:'1600px', margin:'auto', marginTop:'20px'}} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

