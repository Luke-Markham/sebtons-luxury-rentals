import React from "react";
import ReactLoading from "react-loading";
import "./loading.styles.scss";

const Loading = () => {
  return (
    <div className="loading-container">
      <ReactLoading type="cylon" color="#ffde59" height="40%" width="40%" />
    </div>
  );
};

export default Loading;
