"use client"
import React, { useEffect, useState } from "react";
import AboutImageSlider from "../aboutSwiper/aboutSwiper";
import FsLightbox from "fslightbox-react";

const productData =[
	'./south-pexels-heyho-01.jpeg','./south-pexels-heyho-02.jpeg','./south-pexels-heyho-03.jpeg','./south-pexels-heyho-04.jpeg',
	'./south-pexels-heyho-05.jpeg','./south-pexels-heyho-06.jpeg','./south-pexels-monica-07.jpeg','./south-pexels-olgalioncat-08.jpeg',
	'./south-pexels-pavel-danilyuk-09.jpeg','./south-pexels-tima-miroshnichenko-10.jpeg',
	'./southshare-paints-pixabay.jpeg',
  
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