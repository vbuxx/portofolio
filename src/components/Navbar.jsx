import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <span className="nav-brand">Brand...</span>
        </div>
        <div className="nav-right">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/" className="nav-link">
            About
          </a>
          <a href="/" className="nav-link">
            Skills
          </a>
          <a href="/" className="nav-link">
            Projects
          </a>
          <a href="/" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
