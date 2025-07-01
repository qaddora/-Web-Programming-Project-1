import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./styles.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="social-icons">
        <a href="" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="mailto:osamakadduora@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p className="copyright">
        © {year} All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
