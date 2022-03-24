import React from 'react';

import './header-section.style.scss';

const HeaderSection = ({ text }) => {
    return(
        <section className='header-section bg-light'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center">
                            <h2 className="header-section-text">
                                {text}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;