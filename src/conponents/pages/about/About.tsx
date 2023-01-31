import ciscoImage from "../../../media/picture/ciscoImage.jpeg";
import "./about.scss";

import ControlLng from "../../shared/controlLng/ControlLng";
type Props = {};

const About = (props: Props) => {
  const isTrue = ControlLng();
  let textEn = " Hello everyone, my name is Francesco Papa and I'm a web developer. I started out learning programming languages ​​like HTML, CSS, and JavaScript, and continued to broaden my skills over time, learning to work with major frameworks like React . I enjoy working on projects that require a combination of technical skills and creativity, and I am comfortable working alone or in a team. "
  let text1En ="I have a strong understanding of web design principles including usability,accessibility and responsive layout, and I always use the latest technologies and methodologies to ensure my designs are cutting edge.I love to keep learning new things and always keep an eye out for the latest trends and technologies in the world of web development. Besides, I also love traveling and discovering new places. If you are looking for an web developer, please do not hesitate to contact me to discuss your next project. Thanks for visiting my website!";
  let textIt = "Ciao a tutti, mi chiamo Francesco Papa e sono uno sviluppatore web. Ho iniziato imparando linguaggi di programmazione come HTML, CSS e JavaScript, e ho continuato ad ampliare le mie competenze nel tempo, imparando a lavorare con framework importanti come React.Mi piace lavorare su progetti che richiedono una combinazione di competenze tecniche e creatività, e sono a mio agio nel lavorare da solo o in gruppo. "
  let text1It =" Ho conoscenza dei principi del web design, tra cui usabilità, accessibilità e layout responsive, e utilizzo sempre le tecnologie e le metodologie più recenti per garantire che i miei progetti siano all'avanguardia. Amo continuare a imparare cose nuove e tenere sempre d'occhio le ultime tendenze e tecnologie nel mondo dello sviluppo web.Inoltre, amo anche viaggiare e scoprire posti nuovi.Se stai cercando uno sviluppatore web, non esitare a contattarmi per discutere del tuo prossimo progetto.Grazie per aver visitato il mio sito!";
    
  return (
    <div className="container-about ">
      <div className="left">
        <div className="container-img animate__animated animate__fadeInRight">
          <img src={ciscoImage} alt="Francesco Papa" />
        </div>
      </div>
      <div className="right">
        <div className="container-text-body animate__animated animate__fadeInLeft">
        <h2>{isTrue ? 'Chi Sono' : 'About Me'}</h2>
          <p>{isTrue ? textIt : textEn}</p>
          <h2>{isTrue ? 'Abilità' : 'Skills'}</h2>
          <p>{isTrue ? text1It : text1En}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
