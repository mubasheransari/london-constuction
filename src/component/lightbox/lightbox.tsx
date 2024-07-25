"use client"
import React, { useEffect, useState } from "react";
import AboutImageSlider from "../aboutSwiper/aboutSwiper";
import FsLightbox from "fslightbox-react";

const productData =[
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941296/southshare-paints-pixabay_wx6bhf.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941295/south-pexels-monica-07_iyeauu.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941294/southshore-pexels-olgalioncat_zbnge8.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941288/south-pexels-tima-miroshnichenko-10_fnbbmu.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941285/south-pexels-heyho-06_uiubxw.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941284/south-pexels-heyho-05_jgiody.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941278/south-pexels-olgalioncat-08_dwd20e.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941274/south-pexels-heyho-01_ul2bkp.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941272/south-pexels-pavel-danilyuk-09_scavqt.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941263/south-pexels-heyho-02_albve7.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941259/south-pexels-heyho-03_eciurd.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941245/south-pexels-heyho-04_bny2t7.jpeg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1721941296/southshore-pexels-heyho_pi6iah.jpeg',
  ]

  


function Lightbox() {
	// To open the lightbox change the value of the "toggler" prop.
	const [toggler, setToggler] = useState(false);

   
	return (
		<>
			<AboutImageSlider toggle={()=>setToggler(!toggler)} />
			 <FsLightbox
				toggler={toggler}
				sources={
					productData
					}
			/>
		 </>
	);
}

export default Lightbox;