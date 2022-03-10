import React from "react";
import goa from "./Images/Goa.jpg";
import path from "./Images/Fill 219.png";

const Card = () => {
  return (
    <section>
      <img src={goa} />
      <div className="bdy">
        <img src={path} />
        <h3>Goa</h3>
        <a href="">view on google maps</a>
        <h1>Goa</h1>
      </div>
      <span>9 Nov, 2020 - </span>
      <span>13 Nov, 2020 </span>
      <p>
        Goa is a state in western India with coastlines stretching along the
        Arabian Sea. Its long history as a Portuguese colony prior to 1961 is
        evident in its preserved 17th-century churches and the area's tropical
        spice plantations.
      </p>
    </section>
  );
};

export default Card;
