import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-brand">Copyright...</span>
        </div>
        <div className="footer-right">
          <a href="/" className="footer-link">
            Github
          </a>
          <a href="/" className="footer-link">
            LinkedIn
          </a>
          <a href="/" className="footer-link">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
