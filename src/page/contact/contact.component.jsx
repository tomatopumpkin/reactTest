import React from 'react';

import HeaderSection from '../../components/header-section/header-section.component';
import ContactForm from '../../components/contact-form/contact-form.component';
import ContactList from '../../components/contact-list/contact-list.component';

import CONTACT_DATA from '../../assets/data/contact.data';

import './contact.style.scss';

const ContactPage = () => {
    return(
        <section className='contact-page'>
            <HeaderSection text="ติดต่อฉัน"/>

            <section className="contact-section">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-lg-8">
                            <h2>ติดต่อสอบถามเพิ่มเติม</h2>
                            <p className="text-muted mt-3">
                                ถ้ามีข้อสงสัยอยากสอบถามเพิ่มเติม คุณสามารถติดต่อฉันได้ด้านล่างนี้หรือติดต่อฉันได้ผ่านทางอีเมล
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-form mt-5">
                                <ContactForm/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mt-5">
                            {
                                CONTACT_DATA.map(data => (
                                    <ContactList key={data.id} data={data} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                        <div className="mapouter py-5">
                        <div className="gmap_canvas">
                                <iframe width="100%" height="500" id="gmap_canvas" 
                                src="https://maps.google.com/maps?q=%E0%B8%A1%E0%B8%88%E0%B8%9E.%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%B5%E0%B8%99&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight="0" 
                                marginWidth="0"
                                title="Gooogle Maps"
                                >
                                </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
    
}

export default ContactPage;