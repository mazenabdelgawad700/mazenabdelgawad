import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const userRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName.trim() === "") {
      notifyError("Please enter a username");
      userRef.current.focus();
      return;
    }
    if (userEmail.trim() === "" && !isEmail(userEmail)) {
      notifyError("Please enter a valid email address");
      emailRef.current.focus();
      return;
    }
    if (userMessage.trim() === "") {
      notifyError("Please, enter a valid message");
      messageRef.current.focus();
      return;
    }
    notifySuccess("Thanks for your time, we will keep in touch");
    setUserName("");
    setUserEmail("");
    setUserMessage("");
  };

  return (
    <section className="contact" id="contact">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        icon
      />

      <div className="contact-main-text">
        <h2 className="main-header-title">Contact</h2>
        <p className="colored-description">
          I believe that
          <span className="colored-text me-1 ms-1">
            collaboration and creativity
          </span>
          are the
          <br />
          cornerstones of progress, and I am dedicated to bringing a fresh
          perspective.
        </p>
      </div>

      <div className="contact-informations">
        <div className="row">
          <div className="col-lg-4">
            <h3 className="colored-text">Email</h3>
            <p className="colored-description">mazenabdelgawad700@gmail.com</p>
          </div>

          <div className="col-lg-4">
            <h3 className="colored-text">Address</h3>
            <p className="colored-description">Egypt | Cairo</p>
          </div>

          <div className="col-lg-4">
            <h3 className="colored-text">Phone</h3>
            <p className="colored-description">01158907731</p>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="user-main-info">
          <div className="user-name-container">
            <label
              className="colored-description"
              htmlFor="user-name"
              id="name"
            >
              Whats is your name <span className="colored-text">*</span>
            </label>
            <input
              type="text"
              id="user-name"
              name="name"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              autoComplete="off"
              ref={userRef}
            />
          </div>
          <div className="user-email-container">
            <label
              className="colored-description"
              htmlFor="user-email"
              id="email"
            >
              Email address <span className="colored-text">*</span>
            </label>
            <input
              type="email"
              id="user-email"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              autoComplete="off"
              ref={emailRef}
            />
          </div>
        </div>
        <label
          className="colored-description"
          htmlFor="project-details"
          id="project"
        >
          Tell us about your project <span className="colored-text">*</span>
        </label>
        <textarea
          name="user-project-details"
          id="project-details"
          onChange={(e) => setUserMessage(e.target.value)}
          value={userMessage}
          ref={messageRef}
        ></textarea>

        <button className="send-message-button" type="submit">
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
