import React from "react";

export const Testimonial = (props) => {
  return (
    <div>
      <div>
        <img src={props.imgSrc} alt="User Photo" />
        <div>
          <p>{props.name}</p>
          <p>{props.status}</p>
        </div>
      </div>
      <p>{props.heading}</p>
      <p>{props.testimonial}</p>
    </div>
  );
};
