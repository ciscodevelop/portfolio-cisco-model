import React from "react";
import "./skills.scss";
import ControlLng from "../../shared/controlLng/ControlLng";
import { DataSkills } from "../../data/DataSkills";
import { Typewriter } from "react-simple-typewriter";

const Skills = () => {
  const isTrue = ControlLng();
  const wordsEn = [
    "Constantly challenge me...",
    "Improve my skills...",
    "Learn new technologies...",
  ];
  const wordsIt = [
    "Sfidarmi continuamente...",
    "Migliorare le mie capacità...",
    "Apprendere nuove tecnologie... ",
  ];

  return (
    <div className="skills-container animate__animated animate__bounceInDown">
      <div className="header-text">
        <div className="title-text">
          <h1>
            {isTrue ? "Queste Sono Le Mie Abilità" : "These Are My Skills"}
          </h1>
        </div>
        <div className="container-writer">
          <h6 className="text">{isTrue ? "Mi Piace" : "I Like"}</h6>
          <div className="text-writer">
            <Typewriter
              loop={0}
              typeSpeed={150}
              deleteSpeed={90}
              delaySpeed={2500}
              cursor
              words={isTrue ? wordsIt : wordsEn}
            />
          </div>
        </div>
      </div>
      <div className="container-skills">
        {DataSkills.map((skill) => (
          <div className="skill-item">
            <img key={skill.title} src={skill.img} alt={skill.title} />
            <h6>{skill.desc}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
