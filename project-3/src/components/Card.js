import React from "react";

const Card = (props) => {
  let badgeText;
  if(props.openSpots === 0){
    badgeText = "SOLD OUT";
  }else if(props.location === "Online"){
    badgeText = "ONLINE";
  }
  return (
    <div className="crd">
      {badgeText && <div className="crd-badge">{badgeText}</div>}
      <img src={require(`./images/${props.coverImg}`)} className="crd-img" />
      <div className="crd-stat">
        <img src={require("./images/Star 1.png")} className="str" />  
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount }) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="crd-title">{props.title}</p>
      <p className="crd-price"><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
};

export default Card;
