import React, { useState } from "react";
import "./photo-carousel.styles.scss";
import { ReactComponent as Next } from "../../assets/svg/next.svg";
import { ReactComponent as Prev } from "../../assets/svg/prev.svg";

const PhotoCarousel = ({ photosArray }) => {
  const [photoNumber, setPhotoNumber] = useState(0);

  const showNextPhoto = () => {
    setPhotoNumber(photoNumber + 1);
  };

  const showPrevPhoto = () => {
    setPhotoNumber(photoNumber - 1);
  };

  return (
    <div className="photo-carousel-container">
      <img
        className="property-image"
        src={photosArray[photoNumber]}
        alt="house and grounds of the property"
      />
      {photoNumber > 0 ? (
        <Prev className="prev-photo" onClick={showPrevPhoto} />
      ) : null}
      {photoNumber < photosArray.length - 1 ? (
        <Next className="next-photo" onClick={showNextPhoto} />
      ) : null}
    </div>
  );
};

export default PhotoCarousel;
