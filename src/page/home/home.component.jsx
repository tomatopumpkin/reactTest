import React from 'react'
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';

import './home.style.scss';

const Homepage = () => {
    
    const img = "https://i3.fpic.cc/file/img-b1/2022/01/14/IMG_2050.png"

    return (
        <div className='mt-5'>
            <Parallax bgImage={img} strength={-100}>
            <div className="header-content">
                <div className="header-content-title">
                    <h1>สวัสดี ฉันชื่อ <b> น้ำมนต์ !!</b> </h1>
                </div>
                <div className="header-content-sub-title">
                    <span>hello wimonsiri</span>
                </div>
                <div className="header-content-text">
                    <span>เว็บนี้สร้างโดย </span>
                    <Typewriter 
                    options={{
                        strings:['React', 'html' ,'javascript' , 'scss'],
                        autoStart:true,
                        loop:true
                    }}
                    />
                </div>
            </div>
            </Parallax>
        </div>
    )
}

export default Homepage;