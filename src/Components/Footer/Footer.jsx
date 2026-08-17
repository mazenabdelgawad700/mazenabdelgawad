import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-between align-items-center flex-column">
        <p className="footer-text m-0">
          Built and designed by Mazen Abdelgawad.
        </p>
        <p className="footer-text m-0">
          All rights reserved. &copy;
        </p>
      </div>
    </footer>
  );
};

export default Footer;