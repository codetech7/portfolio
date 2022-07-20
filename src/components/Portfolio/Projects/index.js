import './index.scss';
import React from 'react';
// import portfolioImage from '../../../assets/images/portfolioImages/one.jpg'

const Project = ({portfolio}) => {
  
    // console.log(typeof(portfolioImage));
    // const pf = portfolioImage;


    return(
        <div className='portfolio-container'>
           {portfolio.map((port, idx) => {
                // const pfi = port.cover;
                return(
                    <div key = {idx} className='portfolio-box'>
                        <img key = {idx} className='portfolio-image' alt = {port.description} src= {port.cover}/>
                        <div className='portfolio-contents' >
                            <p className='portfolio-title'>{port.title}</p>
                            <h4 className = 'portfolio-description'>{port.description}</h4>
                            <button onClick = {() => {
                              window.open(port.url)
                            }} className='portfolio-btn'>View</button>
                        </div>

                    </div>
                         
                    
                )
                
           })} 
        </div>
    )
}

export default Project;