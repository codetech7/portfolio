import "./index.scss";
import {Link} from 'react-router-dom';
import logoTitle from '../../assets/images/logo-s.png';
import {useState, useEffect} from 'react';
import AnimatedLetter from "../AnimatedLetters";
import Logo from './Logo/index'
import Loader from "react-loaders";


const Home = ()=>{
    const [classNam, setClassNam] = useState('text-animate');
    const jobArray = ['F','u','l','l','s','t','a','c','k',' ','B','l','o','c','k','c','h','a','i','n',' ','D','e','v','e','l','o','p','e','r']
    const nameArray = ['i','r',' ','A','a','r','o','n',' ','I','s','r','a','e','l'];

    useEffect(() => {
      setTimeout(() => {
        setClassNam('text-animate-hover');
      }, 6000);
    
     }, []
    
    )
    
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className= {`${classNam} _9`}>H</span>
                        <span className={`${classNam} _10`}>i</span> 
                        <span className={`${classNam} _11`}>,</span>
                        <br />
                        <span className={`${classNam} _12`}>I </span> 
                        <span className={`${classNam} _13`}> </span>
                        <span className={`${classNam} _14`}>a</span>
                        <span className={`${classNam} _15`}>m</span>
                        <img src = {logoTitle} alt = 'developer'/>
                        <AnimatedLetter strArray={nameArray} letterClass={classNam} idx = {16}/>
                        <br />
                        <AnimatedLetter strArray={jobArray} letterClass={classNam} idx = {32}/>

                    </h1>
                    <h2>Blockchain Developer/ Frontend Developer/Cryto Enthusiast</h2>
                    <Link to='/contact' className='flat-button'>PING ME</Link>
                    <Logo/>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
};

export default Home;