"use client"
import React from 'react';
import Link from 'next/link';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, 
        Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";   
import style from './scroll.module.scss'
type Props = {}

const Scroll = (props: Props) => {

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className={style.main_container}>
    <div className={style.scroll_container}>
        <ScrollContainer>
        <ScrollPage className={style.scroll_page}>
        <div className={style.scroll_page_wrap}>
        <div className={style.scroll_box}>
        <Animator animation={MoveOut(-1000, -500)}>
            <img src='./southshore-pexels-heyho.jpg' width={'auto'} height={'300px'} />
        </Animator>
        </div>
        <div className={style.scroll_box}>
        </div>
        </div>
        </ScrollPage>
        </ScrollContainer>
    </div>
    <div className={style.foucs_wrap}>
      <p className={style.heading}>Our Focus</p>
      <p className={style.text}>
      At South Shore Construction, we specialize in delivering high-quality residential and commercial building projects. Our focus is on 
      craftsmanship, safety, and sustainability, ensuring each project exceeds client expectations. With a commitment to excellence and 
      innovation, we build trust and lasting structures in every community we serve.
      </p>
      </div>
     <div className={style.scroll_container}>
     <ScrollContainer>
     <ScrollPage  className={style.scroll_page}>
     <div className={style.scroll_page_wrap} >
     <div className={style.scroll_box}>
     <Animator animation={MoveOut(1000, 500)}>
     <img src='./southshore-pexels-olgalioncat.jpg' width={'auto'} height={'300px'} />
     </Animator>
     </div>
     </div>
     </ScrollPage>
     </ScrollContainer>
 </div>
 </div>
  )
}

export default Scroll