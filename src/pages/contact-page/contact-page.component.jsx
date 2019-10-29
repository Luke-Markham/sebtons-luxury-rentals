import React, { useEffect } from "react";
import "./contact-page.styles.scss";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import ContactForm from "../../sections/contact-form/contact-form.component";
import FormSubmitSuccessCard from "../../components/contact-form-success-card/contact-form-success-component";

const ContactPage = ({ showFormSuccessMessage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="contact-page-container">
      <Fade left>
        <h2 className="contact-page-title">Contact</h2>
      </Fade>
      {showFormSuccessMessage ? <FormSubmitSuccessCard /> : <ContactForm />}
    </section>
  );
};
const mapStateToProps = state => ({
  showFormSuccessMessage: state.contactForm.showFormSuccessMessage
});
export default connect(mapStateToProps)(ContactPage);
