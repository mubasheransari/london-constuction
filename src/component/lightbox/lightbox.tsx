"use client"
import React, { useEffect, useState } from "react";
import AboutImageSlider from "../aboutSwiper/aboutSwiper";
import FsLightbox from "fslightbox-react";

const productData =[
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025507/south-pexels-olgalioncat-08-min_glhjgp.jpg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025507/south-pexels-tima-miroshnichenko-10-min_j4qr1l.jpg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/south-pexels-monica-07-min_zvdujn.jpg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/south-pexels-heyho-03-min_ijzqtw.jpg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/south-pexels-heyho-02-min_xhui4w.jpg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/pexels-olgalioncat-7245328-min_trab4x.jpg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-05-min_qae5vh.jpg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-05-min_qae5vh.jpg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-06-min_uxqhuc.jpg',
	'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-01-min_u44mec.jpg',
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