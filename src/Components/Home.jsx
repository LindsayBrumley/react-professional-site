import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export function Home() {
  return (
    <div>
      <h1 className="title">Lindsay Brumley</h1>
      <img
        src="https://drive.google.com/uc?export=view&id=1ys19YeVXbvzDgEBh8JUdEZop8k_-bBIE"
        className="headshot"
      />
      <div>
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
      </div>
    </div>
  );
}
