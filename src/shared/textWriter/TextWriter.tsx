import React from "react";
import { Typewriter  } from "react-simple-typewriter";
import "./textWriter.scss";
function TextWriter({ words }: any) {
  return (
    <div className="container-text">
      <h1 className="type-words animate__animated animate__fadeInUp animate__delay-2s  ">
        <Typewriter
          loop={0}
          typeSpeed={150}
          deleteSpeed={90}
          delaySpeed={2500}
          cursor
          words={words}
        /> 
      </h1>
    </div>
  );
}

export default TextWriter;
