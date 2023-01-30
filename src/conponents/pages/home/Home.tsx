import ModelDraw from "../../shared/drawModels/DrawModels";
import "./home.scss";
import ControlLng from "../../shared/controlLng/ControlLng";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  const isTrue = ControlLng();
  let wordsEn = [
    "Hi, My Name is Cisco",
    "I'm Web Developer",
    "<I Love Code/> ",
  ];
  let wordsIt = [
    "Ciao, Il Mio Nome è Cisco",
    "Sono Un Web Developer",
    "<Io Amo Il Codice/> ",
  ];
  return (
    <div className="home-container">
      <div className="canvas-container">
        <ModelDraw />
      </div>
      <h1 className="typewords-home animate__animated animate__fadeInUp animate__delay-2s  ">
        <Typewriter
          loop={0}
          typeSpeed={150}
          deleteSpeed={90}
          delaySpeed={2500}
          cursor
          words={isTrue ? wordsIt : wordsEn}
        />
      </h1>
    </div>
  );
};

export default Home;
