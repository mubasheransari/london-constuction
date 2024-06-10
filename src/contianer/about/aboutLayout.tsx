import React from 'react';
import style from './aboutLayout.module.scss'

type Props = {}

const features = [
       {subline:'Expertise and Experience',
       text:'"With years of experience in the construction industry, South Share has built a reputation for delivering high-quality projects. Our team of skilled professionals brings a wealth of knowledge and expertise to every project, ensuring exceptional results."'   
       },
       {subline:'Comprehensive Services',
       text:'"We offer a full range of services, from architectural design and structural engineering to interior design, construction, and project management. This all-in-one approach ensures a seamless process from concept to completion."'   
       },
       {subline:'Quality and Precision',
        text:'"Our commitment to quality is unwavering. We use the best materials and the latest techniques to ensure that every project meets our high standards. Attention to detail and precision are at the core of our work ethic."'   
       },
       {subline:'Timely Delivery',
        text:'"We understand the importance of deadlines. Our efficient project management and dedicated team ensure that your project is completed on time, without compromising on quality."'   
       },
       {subline:'Innovative Solutions',
        text:'"We embrace innovation in every aspect of our work. From sustainable building practices to cutting-edge design, we incorporate the latest advancements to provide you with modern and efficient solutions."'   
       },
       {subline:'Transparent Communication',
        text:'"Open and honest communication is key to a successful project. We keep you informed at every stage, providing regular updates and addressing any concerns promptly."'   
       },
       {subline:'Competitive Pricing',
        text:'"We offer competitive pricing without compromising on quality. Our transparent pricing model ensures you get the best value for your investment."'   
       }
]

const AboutLayout = (props: Props) => {
  return (
    <div className={style.about_container}>
        <p className={style.heading}>About Us</p>
        <p>
            Introduction: Welcome to South Shore, where innovation meets craftsmanship. We are dedicated to transforming your vision into tangible structures with unparalleled quality and precision. 
            Our team of experts ensures every project is executed to the highest standards, making us a leader in the construction industry.
        </p>
        <ul>
            {features.map((item:any,index)=>{
            return (
            <li key={'feature_'+index} className='mb-3'>
            <p className={`${style.sub_line} me-2`}>{item.subline}:</p>
            <p>{item.text}</p>
            </li>
                    )
                })}

        </ul>
        </div>
  )
}

export default AboutLayout