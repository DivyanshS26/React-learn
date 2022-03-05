import React from "react";

const Card = (props) => {
  return (
    <div className="crd">
      <img src={require(`./images/${props.img}`)} className="kat" />
      <div className="crd-stat">
        <img src={require("./images/Star 1.png")} className="str" />  
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount }) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
};

export default Card;
