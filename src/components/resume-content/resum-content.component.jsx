import React from 'react';

import { Animated } from 'react-animated-css';
import './resume-content-style.scss';

const ResumeContent = ({data , skills}) => {
    return (
        <div className="resume-data-content">
        <div className="resume-data-title">
            <h1>{data.name}</h1>
        </div>
        {
            skills ? (
            <>
                <div className="row">
                    {
                        data.data.map(({id , skill_icon , skill_name , color}) => (
                            <div className="col-md-12 col-lg-6" key={id}>
                                <Animated animationIn='slideInRight' animationOutDuration={1000}>
                                    <div className="resume-skill-content">
                                        <div className="resume-skill-icon">
                                            <i className={`${skill_icon} ${color}`}></i>
                                        </div>
                                        <div className="resume-skill-name">
                                            <h1>{skill_name}</h1>
                                        </div>
                                    </div>
                                </Animated>
                            </div>
                        ))
                    }
                </div>
            </>
            ) : (
            <div className="resume-data-info">
            {data.data.map((data) => (
                <div className="resume-info" key={data.id}>
                    <b>{data.year}</b> - <span>{data.info}</span>
                </div>
            ))}
        </div>
        )
        }
        
    </div>
    )
}
export default ResumeContent;