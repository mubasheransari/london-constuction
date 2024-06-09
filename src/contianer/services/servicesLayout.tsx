import React from 'react'
import style from './servicesLayout.module.scss'

type Props = {}

const features = [
    {
        subline:'Architecture',
        text:'Our architectural services blend creativity with practicality, ensuring your vision is brought to life. From initial concepts to detailed designs, we focus on functionality, aesthetics, and sustainability.'
    },
    {
        subline:'Structural Engineering',
        text:'Our structural engineering team provides innovative solutions for safe and stable structures. We handle all aspects of structural design, analysis, and consultation, ensuring compliance with industry standards.'
    },
    {
        subline:'Interior Designing',
        text:'Transform your space with our interior design services. Whether We offer comprehensive construction services for residential, commercial, and industrial projects. Our skilled team ensures timely and budget-friendly execution, maintaining the highest quality standards.it.&s residential or commercial, we create environments that are stylish, functional, and reflective of your personality or brand.'
    },
    {
        subline:'Construction',
        text:'We offer comprehensive construction services for residential, commercial, and industrial projects. Our skilled team ensures timely and budget-friendly execution, maintaining the highest quality standards.'
    },
    {
        subline:'Design and Build',
        text:'Streamline your project with our design and build services. This integrated approach combines design, planning, and construction under one roof, providing a seamless and efficient experience.'
    },
    {
        subline:'Commercial Fit-Out',
        text:'Our commercial fit-out services cater to offices, retail spaces, and hospitality venues. We deliver tailored solutions that enhance functionality and aesthetic appeal, ensuring a perfect fit for your business needs.'
    },
    {
        subline:'Project Management',
        text:'Our project management services guarantee your project is completed on time and within budget. We oversee every phase, from planning and coordination to execution and delivery, ensuring a smooth process.'
    },
    {
        subline:'Maintenance',
        text:'Keep your property in top condition with our maintenance services. We offer regular inspections, repairs, and upgrades, ensuring longevity and optimal performance of your building.'
    },
]

const ServicesLayout = (props: Props) => {
  return (
    <div className={style.services_container}>
        <p className={style.heading}>Services</p>
        <p>Explore our wide range of services designed to cater to all your construction needs.</p>
        <ul>
        {features.map((item,index)=>{
            return (
                <li key={'feature_'+index} className='mb-3'>
                    <p className={`${style.sub_line}  me-2`}>{item.subline}:</p>
                    <p>{item.text}</p>
                </li>


            )
        })}
        </ul>
    </div>
  )
}

export default ServicesLayout