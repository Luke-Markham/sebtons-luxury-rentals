import React, { useEffect } from "react";
import "./contact-form-success.styles.scss";
import { connect } from "react-redux";
import { displayFormSuccessMessage } from "../../redux/contactForm/contact-form.actions";
import { animated, useTransition } from "react-spring";
import { ReactComponent as CloseSuccessMessage } from "../../assets/svg/closeNav.svg";
const FormSubmitSuccessCard = ({
  displayFormSuccessMessage,
  showFormSuccessMessage
}) => {
  useEffect(() => {
    setTimeout(() => displayFormSuccessMessage(false), 8000);
  }, [displayFormSuccessMessage]);

  const slideInOut = useTransition(showFormSuccessMessage, null, {
    from: { transform: "translateX(100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(100%)" }
  });
  return slideInOut.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <div className="contact-form-success-card-container">
            <CloseSuccessMessage
              className="close-success-message-btn"
              onClick={() => displayFormSuccessMessage(false)}
            />
            <p className="contact-form-success-card-title">Thank You</p>
            <p className="contact-form-success-card-text-1">
              We have successfully received your message.
            </p>
            <p className="contact-form-success-card-text-2">
              One of our team will be in contact with you within the next hour
              about any properties or specific details you may have enquired
              about.
            </p>
            <p className="contact-form-success-card-text-3">
              Kind Regards,
              <br />
              <i>Sebtons</i>
            </p>
          </div>
        </animated.div>
      )
  );
};
const mapDispatchToProps = dispatch => ({
  displayFormSuccessMessage: decision =>
    dispatch(displayFormSuccessMessage(decision))
});

const mapStateToProps = state => ({
  showFormSuccessMessage: state.contactForm.showFormSuccessMessage
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSubmitSuccessCard);
