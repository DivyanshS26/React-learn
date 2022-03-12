import React from "react";
import goa from "./Images/Goa.jpg";
import path from "./Images/Fill 219.png";

const Card = (props) => {
  return (
    <div className="crd">
      <img className="crd-img" src={require(`./Images/${props.imageUrl}`)} />
      <div className="crd-body">
        <div className="crd-loc">
          <img src={path} />
          <h3>{props.location}</h3>
          <a href={props.googleMapsUrl}>view on google maps</a>
        </div>
        <h1 className="bold">{props.title}</h1>
        <span className="bold">{props.startDate} - </span>
        <span className="bold">{props.endDate} </span>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
