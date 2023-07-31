import React from "react";
import "./BabyContainer.css";
type ReleaseProps = {
  name: string;
  ammount: string;
  amount: string;
  date: string;
  src: string;
  number: string;
};

const ReleaseContainer = (props: ReleaseProps) => {
  return (
      <div className="map-release">
      <img src={props.src} alt="" className="img1" />
      <div className="">
        <p>To: {props.name}</p>
        <p>Mobile ac: {props.number}</p>
      </div>
      <div className="">
        <p className="amount">{props.ammount}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default ReleaseContainer;
