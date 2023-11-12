import "../Components/component-css/portfolio.css";

export function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio">Portfolio</h1>
      <a
        href="https://grace-shopper-gqui.onrender.com/"
        className="portfolio-links"
      >
        Grace Shopper
      </a>
      <p className="project-description">
        A fully functioning e-commerce website selling frog themed items
      </p>

      <a
        href="https://github.com/LindsayBrumley/stranger-s-things"
        className="portfolio-links"
      >
        Stranger's Things
      </a>
      <p className="project-description">
        An online marketplace that users can list and sell items as well as
        message other users
      </p>

      <a
        href="https://github.com/LindsayBrumley/Horoscope"
        className="portfolio-links"
      >
        Horoscope
      </a>
      <p className="project-description">
        A horoscope website offering users the ability to access a personalized
        reading based on their zodiac sign and chosen timeframes
      </p>
    </div>
  );
}
