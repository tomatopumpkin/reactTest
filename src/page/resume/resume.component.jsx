import React from 'react';
import { Parallax } from 'react-parallax';
import RESUME_DATA from '../../assets/data/resume.data';
import ResumeContent from '../../components/resume-content/resum-content.component';

import './resume.style.scss';

const ResumePage = () => {

    const {born , education , experience , awards , skills } = RESUME_DATA;
    return (
        <div className='my-5 pt-5'>
            <div className="resume pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-3">
                            <div className="resume-parallax">
                                <Parallax className='overflow-visible'
                                bgImage='https://i3.fpic.cc/file/img-b1/2022/01/16/Floral-Wreath-Photography-Logo.png'
                                strength={150} //ยิ่งเลขสูงยิ่งเลื่อนไว
                                >
                                    <img src="" alt="" className='img-fluid' />
                                </Parallax>
                                <Parallax className='overflow-visible'
                                bgImage='https://i3.fpic.cc/file/img-b1/2022/01/16/65881152_1318673094965531_5555970059177820160_n.jpg'
                                bgClassName='profile-image'
                                strength={-150}
                                />

                            </div>
                        </div>
                        <div className="col-md-12 col-lg-9">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <ResumeContent data={born}/>
                                        <ResumeContent data={education}/>
                                        <ResumeContent data={experience}/>
                                    </div>
                                    <div className="col-md-6">
                                        <ResumeContent data={awards}/>
                                        <ResumeContent data={skills} skills/>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumePage;