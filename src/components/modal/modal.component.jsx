import React from "react";
import ReactDOM from "react-dom";
import "./modal.styles.scss";
import Overlay from "../photo-carousel-overlay/photo-carousel-overlay-component";

const Modal = props => {
  return ReactDOM.createPortal(<Overlay />, document.querySelector("#modal"));
};

export default Modal;
