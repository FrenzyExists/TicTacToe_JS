import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="media-container">
                <div className="media">
                    <a href="https://twitter.com/Not__Pikachu">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
                <div className="media">
                    <a href="https://github.com/FrenzyExists">
                    <FontAwesomeIcon icon={faGithub} />
                        </a>
                    
                </div>
                <div className="media">
                    <a href="https://www.linkedin.com/in/pikachu-%E2%9A%A1/">
                    <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                </div>
            </div>
            <p>
                Made with <FontAwesomeIcon icon={faMugHot} />
            </p>
        </footer>
    )
}

export default Footer;