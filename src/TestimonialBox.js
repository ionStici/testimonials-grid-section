import React from "react";
import quot from "./images/bg-pattern-quotation.svg";
import "./styles/testimonial.scss";

export const Testimonial = (props) => {
  return (
    <div
      className={`${props.cl} tt`}
      style={{ backgroundColor: props.bgColor }}
    >
      {props.quote ? <img className="quotes" src={quot} alt="" /> : null}

      <div className="tt__profile-wrapper">
        <img className="tt__photo" src={props.imgSrc} alt="User" />
        <div>
          <p className="tt__name">{props.name}</p>
          <p className="tt__status">{props.status}</p>
        </div>
      </div>
      <p className="tt__heading">{props.heading}</p>
      <p className="tt__testimonial">{props.testimonial}</p>
    </div>
  );
};
