import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.webp";
import githubIcon from "../../assets/github.webp";
import instagramIcon from "../../assets/instagram.webp";
import discordIcon from "../../assets/discord.webp";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>L</span>
        <span>Fernnando</span>
      </a>
      <div>
        <p>
          Este site foi feito com <img src={reactIcon} alt="React" /> e muito
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/luysfernnando/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/luysfernnando"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/luysfernnando/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://discord.com/users/411052717255950356"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  );
}
