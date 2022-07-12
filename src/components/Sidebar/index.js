import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className='nav-bar'>
    <Link to = '/' className = 'logo' >
        <img src ={LogoS} alt ="logo"/>
        <img className = 'sub-logo' src={LogoSubtitle} alt='logoSubtitle' />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname = 'active' to='/'>
            <FontAwesomeIcon icon = {faHome} color= "#4d4d4e"  ></FontAwesomeIcon>
        </NavLink>
        <NavLink exact="true" activeclassname = 'active' className = 'about-link' to='/about'>
            <FontAwesomeIcon icon = {faUser} color= "#4d4d4e"  ></FontAwesomeIcon>
        </NavLink>
        <NavLink exact="true" activeclassname = 'active' className = 'contact-link' to='/contact'>
            <FontAwesomeIcon icon = {faEnvelope} color= "#4d4d4e"  ></FontAwesomeIcon>
        </NavLink>
    </nav>

    <ul>
        <li>
            <a href='www.google.com' target="_blank" rel='noferrer'><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon></a>
        </li>
        <li>
        <a href='www.google.com' target="_blank" rel='noferrer'><FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon></a>
        </li>
        <li>
        <a href='www.google.com' target="_blank" rel='noferrer'><FontAwesomeIcon icon={faTwitter} color="#4d4d4e"></FontAwesomeIcon></a>
        </li>
        <li>
        <a href='www.google.com' target="_blank" rel='noferrer'><FontAwesomeIcon icon={faDiscord} color="#4d4d4e"></FontAwesomeIcon></a>
        </li>
    </ul>
  </div>
)

export default Sidebar;