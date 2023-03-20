import React from "react";
import "./card.scss";
import ControlLng from "../../shared/controlLng/ControlLng";
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
    <div className="card-container animate__animated animate__bounceInDown ">
      <div className="img-container animate__animated animate__bounceInDown">
        <a href={link}>
          <img className="card-img-top " src={image} alt="Card  cap" />
        </a>
      </div>
      <div className="card-body animate__animated animate__bounceInDown">
        <h5 className="card-title">{title}</h5>
        <p className="card-desc">{isTrue ? desc?.it : desc?.en}</p>
        <a href={link} className="btn-btn-primary">
          {isTrue ? "Vai al Sito" : "Go on Site"}
        </a>
      </div>
    </div>
  );
};

export default Card;
