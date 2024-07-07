import React from 'react'
import style from './contact.module.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

type Props = {}

const ContactComp = (props: Props) => {
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
                    <div className={style.input_wrap}>
                    <input className='border border-1 p-2' placeholder='Your Name' />
                    <input className='border border-1 p-2' placeholder='Your Email' />
                    </div>
                    <div className={style.input_wrap}>
                    <input className='border border-1 p-2' placeholder='Phone Number' />
                    <input className='border border-1 p-2' placeholder='Select Enquiry' />
                    </div>
                    <textarea placeholder='Message' className={`w-100 p-2 ${style.text_area}`} />
                    <p className={`${style.send_btn}`}>Send</p>


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