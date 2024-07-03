"use client"
import React, { useEffect, useState } from "react";
import AboutImageSlider from "../aboutSwiper/aboutSwiper";
import FsLightbox from "fslightbox-react";

const productData =[
	'./south-pexels-heyho-01.jpg','./south-pexels-heyho-02.jpg','./south-pexels-heyho-03.jpg','./south-pexels-heyho-04.jpg',
	'./south-pexels-heyho-05.jpg','./south-pexels-heyho-06.jpg','./south-pexels-monica-07.jpg','./south-pexels-olgalioncat-08.jpg',
	'./south-pexels-pavel-danilyuk-09.jpg','./south-pexels-tima-miroshnichenko-10.jpg',
	'./southshare-paints-pixabay.jpg',
  
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