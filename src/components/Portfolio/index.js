import './index.scss';
import React, {useState, useEffect} from 'react';
import Loader from 'react-loaders';
import AnimatedLetter from '../AnimatedLetters';
import portfolioData from '../../data/portfolio';
import Projects from './Projects';
// import  from ''

const Portfolio = () => {

//     const data =  {
//         "portfolio" : [
//        {
//             "cover": require("../../assets/images/portfolioImages/one.jpg"),
//             "title": "Ethereum based charity donations tracking solution",
//             "url": "https://africharitydao.herokuapp.com",
//             "description": "Solidity, ReactJS, Web3JS, Next, Heroku, Git"
//         }
//     ]
// };
     
    

    const [classNam, setclassNam] = useState('text-animate');
    // console.log(portfolio[0]['cover']);

    useEffect(() => {

    
    //   setTimeOut()
    setTimeout(() => {
        setclassNam("text-animate-hover");
    }, 3000);
     
    }, [])

    // const renderPortfolio = (portfolio) => {
        

    //     return(
    //         portfolio.map((port, idx) => {

    //     //  console.log(typeof(port.cover));

    //           return (
    //             <div className='' key={idx} >
    //                 <img alt={`made with ${port.description}`} src = {port['cover']} />
    //             </div>
    //         )
    //         })

    //     )
    // }
    
  return (
    <>
     <div className='container portfolio-page'>
        <h1 className = 'page-title'>
            
                <AnimatedLetter idx = {15} letterClass={classNam} strArray={'Portfolio'.split('')} />

        </h1>
        <div>
            {/* <img src={data['portfolio'][0]['cover']} alt = 'xup'/> */}
            {/* <img src={portfolioData['portfolio'][0]['cover']} alt = 'xup'/> */}
            <Projects portfolio={portfolioData['portfolio']}/>
            {/* {renderPortfolio(portfolioData['portfolio'])} */}
        </div>
     </div>

     {/* <div>{renderPortfolio()}</div> */}
     <Loader type='pacman' />
    </>
   
  )
}

export default Portfolio;

// create a react portfolio component