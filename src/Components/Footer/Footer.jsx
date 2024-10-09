import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="" style={styles}>
      <div className="container d-flex justify-content-between align-items-center">
        <p className="mb-0 text-light">
          Made By Mazen Abdelgawad &copy; {new Date().getFullYear()}
        </p>
        <p className="mb-0 text-light">
          <a
            target="_blank"
            className="mx-1 text-light"
            href="www.linkedin.com/in/mazen-abdelgawad"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            className="mx-1 text-light"
            href="https://github.com/mazenabdelgawad700"
          >
            <FaGithub />
          </a>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  backgroundColor: "#000",
  padding: "20px 0",
  color: "var(--white-color)",
};

export default Footer;
