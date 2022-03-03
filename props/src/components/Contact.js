import React from "react";

const Contact = ({ img, name, phone, eml }) => {
  return (
    <div className="contact-card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <div className="info-group">
        {/* <img src="./images/phone-icon.png" /> */}
        <p>{phone}</p>
      </div>
      <div className="info-group">
        {/* <img src="./images/mail-icon.png" /> */}
        <p>{eml}</p>
      </div>
    </div>
  );
};

export default Contact;
