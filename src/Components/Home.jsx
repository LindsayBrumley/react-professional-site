import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../Components/component-css/home.css";

export function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="headshot">
          <img
            src="https://drive.google.com/uc?export=view&id=1ys19YeVXbvzDgEBh8JUdEZop8k_-bBIE"
            alt="Lindsay Brumley Headshot"
            className="photo"
          />
        </div>
        <div className="title-container">
          <h1 className="title">Lindsay Brumley</h1>
          <p className="description">Junior Software Engineer</p>
        </div>
      </div>
      <footer>
        <a
          href="https:github.com/LindsayBrumley"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <FontAwesomeIcon icon={faGithub} size="4x" />
        </a>
        <a
          href="https://www.linkedin.com/in/lindsaybrumley"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </a>
      </footer>
    </div>
  );
}
