import React,{useState , useRef} from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

import './contact-form.style.scss';

const ContactForm = () =>{

    const form = useRef();

    const [mail , SetMail] = useState({
        user_name:'',
        user_email:'',
        sunbject:'',
        message:'',
    });
    
//แบบไดนามิก
    const handleChange = Event =>{
        const {name , value} = Event.target;
        SetMail({...mail , [name]:value});
    }

    const handleSubmit = Event =>{
        Event.preventDefault();
        emailjs.sendForm('service_p9cx0kv',
        'template_bw7bn48',
        form.current,'user_oRc5OppqTS4PQDx3OCN0L'
        )
        
        .then(res => {
            Swal.fire({
                title: `<h2>ส่งข้อความสำเร็จ</h2>`,
                icon:'success'
            })
        },error => {
            Swal.fire({
                title: `<h2>ส่งข้อความไม่สำเร็จ</h2>`,
                icon:'error',
                text:error.text
            })
        })
    }

    const {user_email , user_name , sunbject , message} = mail;
// console.log(mail);
    return(
        <form ref={form} onSubmit={handleSubmit} className='row'>

            <div className="col-lg-6 mb-4">
                <div className="form-group">
                <input 
                type="text" 
                className='form-control'
                placeholder='กรุณากรอกชื่อและนามสกุล'
                required
                value={user_name}
                name='user_name'
                onChange={handleChange}
                />
                </div>
            </div>

            <div className="col-lg-6 mb-4">
                <div className="form-group">
                <input 
                type="email" 
                className='form-control'
                placeholder='กรุณากรอกอีเมล'
                required
                value={user_email}
                name='user_email'
                onChange={handleChange}
                />
                </div>
            </div>

            <div className="col-lg-12 mb-4">
                <div className="form-group">
                <input 
                type="text" 
                className='form-control'
                placeholder='หัวข้อ'
                required
                value={sunbject}
                name='sunbject'
                onChange={handleChange}
                />
                </div>
            </div>

            <div className="col-lg-12 mb-4">
                <div className="form-group">
               <textarea 
               name="message" 
               cols="30" 
               rows="10"
               value={message}
               onChange={handleChange}
               placeholder='ข้อความ'
               className='form-control'
               >
                   {message}
               </textarea>
                </div>
            </div>

            <div className="col-lg-4">
                <button className="btn-dark form-control py-2">
                    ส่งอีเมล
                </button>
            </div>

        </form >

    )
}

export default ContactForm;