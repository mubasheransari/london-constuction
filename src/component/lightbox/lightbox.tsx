"use client"
import React, { useEffect, useState } from "react";
import AboutImageSlider from "../aboutSwiper/aboutSwiper";
import FsLightbox from "fslightbox-react";


function Lightbox() {
	// To open the lightbox change the value of the "toggler" prop.
	const [toggler, setToggler] = useState(false);

   
	return (
		<>
			{/* <button onClick={() => setToggler(!toggler)}>
				Toggle Lightbox
			</button> */}
			<AboutImageSlider toggle={()=>setToggler(!toggler)} />
			 <FsLightbox
				toggler={toggler}
				sources={[
					'https://i.imgur.com/fsyrScY.jpg',
					'./pexels-thgusstavo-2102587.jpg',
					'./southshore-pexels-heyho.jpg',
					'./southshore-pexels-olgalioncat.jpg',
					'./pexels-binyaminmellish-1396122.jpg',
					'./pexels-emrecan-2079249.jpg'
				]}
			/>
		 </>
	);
}

export default Lightbox;