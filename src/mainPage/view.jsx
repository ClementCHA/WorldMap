import React from "react";
import "./style.scss";

import Map from "./world.svg.jsx";

const MainPageView = () => {
  const redirect = (country) => {
    window.open(`https://en.wikipedia.org/wiki/${country}`, "_blank");
  };

  return (
    <div className="mainPage">
      <Map
        style={{ width: "100%", height: "100%" }}
        onClick={(value) => redirect(value.target.attributes.name.value)}
      />
    </div>
  );
};

export default MainPageView;
