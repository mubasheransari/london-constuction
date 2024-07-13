"use client"
import React, { useState } from 'react'
import style from './contact.module.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useFormik } from 'formik';
import * as yup from 'yup';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type Props = {}

const options = ['New project Enquiry','Maintenance Enquiry','Product Enquiry','Supplier Enquiry','Career Enquiry','Collaboration']

const ContactComp = (props: Props) => {

    const [btnDisabled,setBtnDisabled] = useState(false)

    const validationSchema = yup.object({
        name: yup.string().min(3, 'must be at least 3 characters long').required('First Name is required'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        phone:yup.string().required('phone number is required'),
        enquiry:yup.string().required('Enquiry is required'),
        message:yup.string().required('message is required'),
      }); 
      
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone: '',
          enquiry:'',
          message:''
        },
        validationSchema,
        onSubmit: (values:any) => {
        alert(JSON.stringify(values, null, 2));
        setBtnDisabled(true)
        setTimeout(()=>{
            setBtnDisabled(false)

        },2000)
        },
      });

  return (
    <div className={style.contact_container}>
        <div className={style.contact_us_container}>
            <div className={style.contact_detail}>
                <p className={style.heading}>Contact Us</p>
                <p className='mb-0'>We would love to speak with you.</p>
                <p>Feel free to reach out using the below details.</p>

                <div className={style.contact_info}>
                    <p className={style.sub_heading}>Get In Touch</p>
                    <p>
                        <PhoneIcon /> T: 020 1111 2222
                    </p>
                    <p>
                        <EmailIcon /> Email: info@south-shore.com
                    </p>
                </div>

                <div className={style.contact_info}>
                    <p className={style.sub_heading}>Office Hours</p>
                    <p>Mondays to Fridays</p>
                    <p>9:00 AM - 6:00 PM</p>
                </div>

                <div className={style.contact_info}>
                    <p className={style.sub_heading}>Maintenance Hours</p>
                    <p>Everyday</p>
                    <p>7:00 AM - 12:00 AM</p>
                </div>

            </div>
            <div className={style.form_detail}>
                <p>Fill out the form below and we will <br/> contact you as soon as possible!</p>
                <div className={style.form}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={style.input_wrap}>
                    <div>
                    <input
                     id="name"
                     name="name"
                     type="text"
                     onChange={formik.handleChange}
                     value={formik.values.name}
                     onBlur={formik.handleBlur}
                     className='border border-1 p-3' 
                     placeholder='Your Name' 
                     />
                     {/* @ts-ignore */}
                      {formik.submitCount > 0 && formik.errors.name && <p className='text-danger position-absolute'>{formik.errors.name}</p>}
                     </div>
                    <div>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    className='border border-1 p-3' 
                    placeholder='Your Email' />
                     {/* @ts-ignore */}
                     {formik.submitCount > 0 && formik.errors.email && <p className='text-danger position-absolute'>{formik.errors.email}</p>}
                     </div>
                    </div>
                    <div className={style.input_wrap}>
                    <div>
                    <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.phone} 
                    onBlur={formik.handleBlur}
                    className='border border-1 p-3' 
                    placeholder='Phone Number' />
                     {/* @ts-ignore */}
                     {formik.submitCount > 0 && formik.errors.phone && <p className='text-danger position-absolute'>{formik.errors.phone}</p>}
                    </div>
                    <div>
                    <select 
                    id="enquiry"
                    name="enquiry"
                    onChange={formik.handleChange}
                    value={formik.values.enquiry}
                    onBlur={formik.handleBlur}
                    className='border border-1 p-3'
                     >
                    <option value="">Select the Enquiry</option>
                    {options.map((item,index)=>{
                        return (
                            <>
                            <option key={'option'+index} value={item}>{item}</option>
                            </>
                        )
                    })}
                    </select>
                     {/* @ts-ignore */}
                    {formik.submitCount > 0 && formik.errors.enquiry && <p className='text-danger position-absolute'>{formik.errors.enquiry}</p>}
                    </div>
                    </div>
                    <div>
                    <textarea
                    id="message"
                    name="message"
                    placeholder='Message' 
                    onChange={formik.handleChange}
                    value={formik.values.message}  
                    onBlur={formik.handleBlur}
                    className={`w-100 p-2 ${style.text_area}`} 
                    />
                     {/* @ts-ignore */}
                     {formik.submitCount > 0 && formik.errors.message && <p className='text-danger position-absolute'>{formik.errors.message}</p>}
                    </div>
                    <button type='submit' disabled={btnDisabled} className={`${style.send_btn}`}>Send</button>
                    </form>
                </div>
            </div>
        </div>
        <div className={style.visit_us_container}>
            <p className={style.visit_heading}>Visit US</p>
            <div className={style.map_wraper}>
            <div style={{flex:1}} className={style.map_box}>
            <div className={style.map}>
            <LocationOnIcon />
            <div>
            <p className={style.sub_heading}>
                Maintenance:
                </p>
            <p>37-38 Margaret Street,<br/>
                Marylebone, Ground Floor<br/>
                London, W1G 0JF
            </p>
            </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.1374728479873!2d-0.20074162350260846!3d51.41890127179331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608a5388b0b99%3A0x8af1ff383ef71104!2sHighlands%20House%20the%20Broadway%2C%20165%20The%20Broadway%2C%20London%20SW19%201NE%2C%20UK!5e0!3m2!1sen!2s!4v1719985013518!5m2!1sen!2s" width="100%" height="700px" style={{border:'0', margin:'auto'}} loading="lazy" ></iframe>
            </div>
            <div style={{flex:1}} className={style.map_box}>
            <div className={style.map}>
            <LocationOnIcon /> 
            <div>
            <p className={style.sub_heading}>
            Design & Construction:
            </p>
            <p>
            205 Regent Street<br/>
            2nd floor, Mayfair,<br/>
            London, W1B 4HB
            </p>
            </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.1374728479873!2d-0.20074162350260846!3d51.41890127179331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608a5388b0b99%3A0x8af1ff383ef71104!2sHighlands%20House%20the%20Broadway%2C%20165%20The%20Broadway%2C%20London%20SW19%201NE%2C%20UK!5e0!3m2!1sen!2s!4v1719985013518!5m2!1sen!2s" width="100%" height="700" style={{border:'0', margin:'auto'}} loading="lazy" ></iframe>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContactComp