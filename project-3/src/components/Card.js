import React from "react";
import kat from "./images/image 12.png";
import star from "./images/Star 1.png";

const Card = () => {
  return (
    <div className="crd">
      <img src={kat} className="kat" />
      <div className="crd-stat">
        <img src={star} className="str" />  
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
};

export default Card;
