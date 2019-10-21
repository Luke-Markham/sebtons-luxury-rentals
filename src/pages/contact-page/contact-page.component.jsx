import React from "react";
import "./contact-page.styles.scss";
import Fade from "react-reveal/Fade";
import ContactForm from "../../sections/contact-form/contact-form.component";

const ContactPage = () => {
  return (
    <section className="contact-page-container">
      <Fade left>
        <h2 className="contact-page-title">Contact</h2>
      </Fade>
      <Fade duration={2000}>
        <ContactForm />
      </Fade>
    </section>
  );
};

export default ContactPage;
