import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    const Name = 'Ethan Siewny'; // Replace with your actual name
    const githubLink = 'https://github.com/AetherealDev'; // Replace with your GitHub profile URL
    const linkedInLink = 'https://www.linkedin.com/in/ethan-siewny-604568257/'; // Replace with your LinkedIn profile URL


    return (
        <footer className="footer">
            <div className="container">
                 Made with ❤️ by {Name}
            </div>
            <br/>
            <button className="btn btn-dark">
                <a href={githubLink}  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
            </button>
            <button className="btn btn-dark">
                <a href={linkedInLink}  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
            </button>
        </footer>
    )
}