import React from "react";
import CardImg from "../assets/swimming.png";
import Star from "../assets/star.png";

function Card() {
  return (
    <div className="card">
      <img src={CardImg} className="card--img" />
      <div className="card--status">
        <img src={Star} className="card--star" />
        <span>5.0</span>
        <span className="gray">(6).</span>
        <span className="gray">USA</span>
      </div>
      <p className="">Life lessons</p>
      <p>
        <span className="bold">From $136 </span>/ Person
      </p>
    </div>
  );
}

export default Card;
