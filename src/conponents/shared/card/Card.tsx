import React from "react";
import "./card.scss";
import ControlLng from "../controlLng/ControlLng";
interface CardDescProps {
  it: string;
  en: string;
}
interface CardProps {
  title?: string;
  desc?: CardDescProps;
  image?: string;
  link?: string;
  linkText?: string;
}

const Card: React.FC<CardProps> = ({ title, desc, image, link, linkText }) => {
  const isTrue = ControlLng();
  return (
   
      <div className="card animate__animated animate__bounceInDown">
        <div className="img-container">
          <a href={link}>
            <img className="card-img-top" src={image} alt="Card  cap" />
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-desc">{isTrue ? desc?.it : desc?.en}</p>
          <a href={link} className="btn btn-primary">
            {isTrue ? "Vai al Sito" : "Go on Site"}
          </a>
        </div>
      </div>
  
  );
};

export default Card;
