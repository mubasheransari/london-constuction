"use client"
import React from 'react'
import style from './contact.module.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useFormik } from 'formik';

type Props = {}

const options = ['New project Enquiry','Maintenance Enquiry','Product Enquiry','Supplier Enquiry','Career Enquiry','Collaboration']

const ContactComp = (props: Props) => {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone: '',
          enquiry:'',
          message:''
        },
        onSubmit: (values:any) => {
          alert(JSON.stringify(values, null, 2));
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
                        <PhoneIcon /> T: 020-8960-8899
                    </p>
                    <p>
                        <EmailIcon /> Email: info@lccontractor.co.uk
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
                    <input
                     id="name"
                     name="name"
                     type="text"
                     onChange={formik.handleChange}
                     value={formik.values.name}
                     className='border border-1 p-3' 
                     placeholder='Your Name' 
                     />
                    <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className='border border-1 p-3' 
                    placeholder='Your Email' />
                    </div>
                    <div className={style.input_wrap}>
                    <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.phone} 
                    className='border border-1 p-3' 
                    placeholder='Phone Number' />
                    <select 
                    id="enquiry"
                    name="enquiry"
                    onChange={formik.handleChange}
                    value={formik.values.enquiry}
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
                    </div>
                    <textarea
                    id="message"
                    name="message"
                    placeholder='Message' 
                    onChange={formik.handleChange}
                    value={formik.values.message}  
                    className={`w-100 p-2 ${style.text_area}`} 
                    />
                    <button type='submit' className={`${style.send_btn}`}>Send</button>
                    </form>
                </div>
            </div>
        </div>
        <div className={style.visit_us_container}>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default ContactComp