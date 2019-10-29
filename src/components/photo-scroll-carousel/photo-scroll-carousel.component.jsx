import React, { useState } from "react";
import "./photo-scroll-carousel.styles.scss";
import { connect } from "react-redux";
import { showLightbox } from "../../redux/lightbox/lightbox.actions";
import { ReactComponent as Next } from "../../assets/svg/next.svg";
import { ReactComponent as Prev } from "../../assets/svg/prev.svg";

const PhotoScrollCarousel = ({ photosArray, showLightbox }) => {
  const [photo0, setPhoto0] = useState(0);
  const [photo1, setPhoto1] = useState(1);
  const [photo2, setPhoto2] = useState(2);

  const showNextPhoto = () => {
    setPhoto0(photo0 + 1);
    setPhoto1(photo1 + 1);
    setPhoto2(photo2 + 1);
  };

  const showPrevPhoto = () => {
    setPhoto0(photo0 - 1);
    setPhoto1(photo1 - 1);
    setPhoto2(photo2 - 1);
  };

  return (
    <div className="photo-scroll-carousel-container">
      {photo0 === 0 ? (
        <div></div>
      ) : (
        <Prev className="scroll-prev-photo" onClick={showPrevPhoto} />
      )}
      <img
        className="scroll-property-image"
        src={photosArray[photo0]}
        alt="house and grounds of the property"
        onClick={() => showLightbox({ photosArray, photo0 })}
      />
      <img
        className="scroll-property-image"
        src={photosArray[photo1]}
        alt="house and grounds of the property"
        onClick={() => showLightbox({ photosArray, photo1 })}
      />
      <img
        className="scroll-property-image"
        src={photosArray[photo2]}
        alt="house and grounds of the property"
        onClick={() => showLightbox({ photosArray, photo2 })}
      />
      {photo2 < photosArray.length - 1 ? (
        <Next className="scroll-next-photo" onClick={showNextPhoto} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  showLightbox: photos => dispatch(showLightbox(photos))
});

export default connect(
  null,
  mapDispatchToProps
)(PhotoScrollCarousel);
