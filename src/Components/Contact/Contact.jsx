import "./Contact.css";
const Contact = () => {

  return (
    <section className="contact" id="contact">

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
    </section>
  );
};

export default Contact;
