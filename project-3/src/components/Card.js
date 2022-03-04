import React from "react";
import star from "./images/Star 1.png";

const Card = (props) => {
  return (
    <div className="crd">
      <img src={props.img} className="kat" />
      <div className="crd-stat">
        <img src={star} className="str" />  
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount }) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
};

export default Card;
