import React , {useState , useEffect} from 'react'
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';

import './port-grid.style.scss';

const PortGrid = ({portfolio , type}) => {

    const [data , setData] = useState(portfolio);

    useEffect(() => {
        if(type){
            setData(portfolio.filter(item => item.type === type))
        }
    }, [type])


    return(
        <>
            {data.map(({id, name , image , github_url , http_url }) => (
               <div className="col-md-12 col-lg-4" key={id}>
                   <Animated animationIn='zoomIn' animationInDuration={1000}>
                       <div className="port-grid-content">
                           <div className="port-image">
                               <img src = {image} alt="" />
                           </div>

                           <div className="port-hover">
                               <div className="port-title">
                                   <h3>{name}</h3>
                               </div>
                               <div className="port-url">
                                    { github_url ? (
                                         <Link to = {github_url}></Link>
                                    ) : '' }
                                        <Link to = {http_url}>
                                            <i className='fad fa-eye'></i> ตัวอย่าง
                                        </Link>
                               </div>
                           </div>
                       </div>
                   </Animated>
               </div>
            ))} 
        </>
    )
}

export default PortGrid;