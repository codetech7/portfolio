import "./index.scss";
import AnimatedLetter from "../AnimatedLetters";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum, faReact, faLinkedin, faJs, faRust, faGolang, faAws } from "@fortawesome/free-brands-svg-icons";
// import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import {Loader} from 'react-loaders'
const About = ()=>{

    const [classNam, setClassnam] = useState('text-animate');

    useEffect(() => {
    setTimeout(() => {
        setClassnam('text-animate-hover');
    }, 3000);
    
      
    }, [])
    
    return(
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetter  strArray={['A','b','o','u','t',' ','m','e']} idx={15} letterClass={classNam}/>
                </h1>
                <div className ='body-content'>
                <p><code>I am a very creative(who isn't? lol) and curious fullstack developer that always seeks to be current and up to date with the current happenings in the ever-changing world of technology.<br/>
                I am obsessed with the Distributed Ledger Technology(Blockchain) as well as Quantum computing and what it can do to make our lives better(with minimal downsides at least...) </code></p>
                <p><code>I have successfully offered my professional services on various freelancing platforms for the past three(3) years, but i am currently seeking a company where I can contribute my knowledge of blockchain and web development to build
                the next generation of the web-the web3.0.</code></p>
                <p><code>Ethereum, Solana, Polygon(L2), Binance Smart Chain, NFTs, Defi, Web3.0, Smart Contracts, React, Python, Solidity, Truffle...The list of technologies that I have  
                in my arsenal is quite a handful. They never get old anyways as I commit to BUIDLing with them daily and helping other developers in my space do the same.</code></p>
                <p><code>I must unfailingly mention that I am a "Community Addict", which means that, despite the fact that I am independent, innovative and I can figure things out without being told what to do, I still love working in groups...<br/>
                Do you want to collaborate on an ongoing project or you got an existing team you want to <code>"Array(teamSize.lenght).push(new Member)"</code> me in, I'm all yours(That was a lot of code back there...sorry)</code></p>

                <p><em>P.S: It might be obvious at this point that I am a writer too...or I wish I was. If the role involves writing...then its the "right thing"...&lt;Rhymes / &gt;</em></p>
                <p><code>I am not your regular everyday geek prying behind huge glasses(I use glasses though...not huge) and long sleeve checks with '90s headphones, docking behind Cathode Ray Tubes and a linux shell(no beef Ubuntu fans), 
                when I am not tinkering away at smart contract vulnerabilities(There sure are a ton of them these days) or hooks in React, you would often catch me hosting tournaments on Lichess.org, reading psychology hacks on Quora(quite underrated IMO), answering questions on codeGrepper(A better stack overflow),
                 learning a new chord progression on my acoustic, chatting with my old buddies from college(not that old actually...graduated recently), making new connections on <FontAwesomeIcon icon={faLinkedin}/> or composing a new song for my woman(Yes! I have a life).</code></p>
                 </div>
            </div>
            <div className="skill-icons">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faJs} color='#DD0031'/> 
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faRust} color='#F06529'/> 
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faReact} color='#28A4D9'/> 
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faEthereum} color='#5ED4F4'/> 
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faAws} color='#EFD81D'/> 
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGolang} color='#EC4D2A'/> 
                    </div>
                </div>
                
                
            </div>
        </div>
        <Loader type='pacman'/> 
        </>
    )
}

export default About;