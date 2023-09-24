import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    const Name = 'Ethan Siewny'; // Replace with your actual name
    const githubLink = 'https://github.com/AetherealDev'; // Replace with your GitHub profile URL


    return (
        <footer className="footer">
            <div className="container">
                 Made with ❤️ by {Name}
            </div>
            <br/>
            <button className="btn btn-dark">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
            </button>
        </footer>
    )
}