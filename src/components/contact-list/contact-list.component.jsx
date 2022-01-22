import React from 'react';

import './contact-list.style.scss';

const ContactList = ({data}) => {

const {title , image , des} = data;

    return (
        <section className='mt-4'>
            <div className="d-flex align-items-center">
                <div className="contact-img float-left mt-3">
                    <img src={image} alt="" />
                </div>

                <div className="ps-4 d-block contact-data">
                    <h6 className="mt-2">
                        {title}
                    </h6>
                    <p className="text-muted mb-0">
                        {des}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactList;