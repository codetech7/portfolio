import "./index.scss";
import {useState, useEffect, useRef} from 'react'
import AnimatedLetter from "../AnimatedLetters";
import Loader from "react-loaders";
import emailjs from '@emailjs/browser'


const Contact = () => {

    const [classNam, setclassNam] = useState('text-animate');
    const formSubmit = useRef();

    useEffect(() => {
      setTimeout(() => {
        setclassNam('text-animate-hover');
      }, 3000);
    
      
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2cxxdfd', 'template_5mwcqif', formSubmit.current, 'gWwvQsIj_RrSrTjeR')
          .then((result) => {
              alert('message successfully sent');
              window.location.reload(false);
          }, () => {
              alert('failed to send');
          });
      };
    
  return(
    <>
        <div className='container contact-page '>
            <div className ='text-zone'>
              <h1>
                <AnimatedLetter strArray={["C",'o','n','t','a','c','t',' ','m','e']} idx={15} letterClass={classNam} />
              </h1>
              <p>
                <code>I am interested in projects related to Blockchain, Ethereum(Solidity), Solana(Rust), Layer2(Polygon), React.js, React Native, NFT, Defi and Web3.0. Please do not hesitate to contact me if you have any projects or enquiries on the aforementioned. I am available for short term(2-3months) and long term project(6 months and above). If you would also like to contribute to my blog on deFI and Web3, my inbox is all yours.</code>
              </p>

              <div className="contact-form">
                    <form ref= {formSubmit} onSubmit = {sendEmail}>
                        <ul>
                            <li className="half">
                                <input type='text' placeholder="name" name="name" required/>
                            </li>
                            <li className="half">
                                <input type='text' placeholder="email" name="email" required/>
                            </li>
                            <li>
                                <input type='text' placeholder="Subject" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required/>
                            </li>
                            <li>
                                <input type='submit' className="flat-button" value="SEND TO AARON" required/>
                            </li>
                        </ul>
                    </form>
               
                </div>
            </div>
            

        </div>
        <Loader type="pacman" />
    </>
  );
}

export default Contact;