import React from "react";
import Star from "../assets/star.png";

function Card(props) {
  return (
    <div className="card">
      <img src={`../src/assets/${props.img}`} className="card--img" />
      <div className="card--status">
        <img src={Star} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}).</span>
        <span className="gray">{props.country}</span>
      </div>
      <p className="">{props.title}</p>
      <p>
        <span className="bold">From {props.price} $</span>/ Person
      </p>
    </div>
  );
}

export default Card;
