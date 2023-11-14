import "../Components/component-css/contact.css";

export function Contact() {
  return (
    <div>
      <header>Hit me up</header>
      <div className="container">
        <div className="contact-info">
          <a
            href="mailto:lindsay.a.brumley@gmail.com?subject=Subject%20Here&body=Hello%20there"
            className="contact-links"
          >
            lindsay.a.brumley@gmail.com
          </a>

          <p className="socials">Check out my social sites</p>
          <a
            href="https://www.linkedin.com/in/lindsaybrumley/"
            className="contact-links"
          >
            Linkedin
          </a>
          <a href="https://github.com/LindsayBrumley" className="contact-links">
            GitHub
          </a>
        </div>
        <div className="container-frame">
          <img
            src="https://drive.google.com/uc?export=view&id=10uLrNKJMFFjnn_QihwYuQvuaL2xS_JU8"
            className="power-stance"
            alt="Lindsay standing with hands on hips"
          ></img>
        </div>
      </div>
    </div>
  );
}
